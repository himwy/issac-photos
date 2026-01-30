const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const MAX_SIZE_MB = 9.5; // Target slightly under 10MB to be safe
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

async function compressImage(filePath) {
  const stats = fs.statSync(filePath);
  const sizeMB = stats.size / (1024 * 1024);
  
  if (sizeMB <= 10) {
    console.log(`Skipping ${path.basename(filePath)} - already under 10MB (${sizeMB.toFixed(2)}MB)`);
    return;
  }

  console.log(`Compressing ${path.basename(filePath)} (${sizeMB.toFixed(2)}MB)...`);

  // Read file into buffer first to avoid file locking issues
  const inputBuffer = fs.readFileSync(filePath);
  const metadata = await sharp(inputBuffer).metadata();

  // Calculate quality based on current size
  let quality = Math.floor((MAX_SIZE_MB / sizeMB) * 100);
  quality = Math.max(40, Math.min(85, quality)); // Keep quality between 40-85

  // Calculate resize factor if needed (for very large images)
  let resizeWidth = metadata.width;
  if (sizeMB > 30) {
    resizeWidth = Math.floor(metadata.width * 0.7);
  } else if (sizeMB > 20) {
    resizeWidth = Math.floor(metadata.width * 0.8);
  }

  // Create backup
  const backupPath = filePath + '.backup';
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(filePath, backupPath);
  }

  // Compress with progressive quality reduction until under 10MB
  let outputBuffer;
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    attempts++;
    
    let pipeline = sharp(inputBuffer);
    
    if (resizeWidth < metadata.width) {
      pipeline = pipeline.resize(resizeWidth, null, { withoutEnlargement: true });
    }

    outputBuffer = await pipeline
      .jpeg({ quality, progressive: true, mozjpeg: true })
      .toBuffer();

    const newSizeMB = outputBuffer.length / (1024 * 1024);
    
    if (outputBuffer.length <= MAX_SIZE_BYTES) {
      console.log(`  ✓ Compressed to ${newSizeMB.toFixed(2)}MB (quality: ${quality}, attempt: ${attempts})`);
      break;
    }

    // Reduce quality and size for next attempt
    quality = Math.max(30, quality - 15);
    resizeWidth = Math.floor(resizeWidth * 0.85);
    console.log(`  Attempt ${attempts}: ${newSizeMB.toFixed(2)}MB - trying lower quality (${quality}) and width (${resizeWidth})`);
  }

  // Write to temp file first, then rename
  const tempPath = filePath + '.tmp';
  fs.writeFileSync(tempPath, outputBuffer);
  fs.unlinkSync(filePath);
  fs.renameSync(tempPath, filePath);
  
  const finalStats = fs.statSync(filePath);
  const finalSizeMB = finalStats.size / (1024 * 1024);
  console.log(`  Final size: ${finalSizeMB.toFixed(2)}MB\n`);
}

async function findLargeImages(dir) {
  const largeImages = [];
  
  function scanDir(currentDir) {
    const items = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item.name);
      
      if (item.isDirectory()) {
        scanDir(fullPath);
      } else if (/\.(jpg|jpeg|png)$/i.test(item.name)) {
        const stats = fs.statSync(fullPath);
        if (stats.size > 10 * 1024 * 1024) {
          largeImages.push(fullPath);
        }
      }
    }
  }
  
  scanDir(dir);
  return largeImages;
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  console.log('Scanning for images larger than 10MB...\n');
  const largeImages = await findLargeImages(publicDir);
  
  console.log(`Found ${largeImages.length} images to compress:\n`);
  
  for (const imagePath of largeImages) {
    try {
      await compressImage(imagePath);
    } catch (error) {
      console.error(`Error compressing ${imagePath}:`, error.message);
    }
  }
  
  console.log('\nDone! All images are now under 10MB.');
  console.log('Backup files (.backup) have been created for originals.');
}

main().catch(console.error);
