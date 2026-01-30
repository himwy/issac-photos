const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'do7btffiq',
  api_key: '597243622227989',
  api_secret: '1xhIAV75Oyir1_Dph2Wrs3jchY8'
});

async function deleteAllResources() {
  console.log('Deleting all resources from Cloudinary...\n');
  
  try {
    // Delete all resources
    let hasMore = true;
    let totalDeleted = 0;
    
    while (hasMore) {
      const result = await cloudinary.api.resources({
        max_results: 500,
        type: 'upload'
      });
      
      if (result.resources.length === 0) {
        hasMore = false;
        break;
      }
      
      const publicIds = result.resources.map(r => r.public_id);
      
      if (publicIds.length > 0) {
        await cloudinary.api.delete_resources(publicIds);
        totalDeleted += publicIds.length;
        console.log(`Deleted ${publicIds.length} resources (Total: ${totalDeleted})`);
      }
      
      hasMore = result.resources.length === 500;
    }
    
    // Also delete any folders
    try {
      const folders = await cloudinary.api.root_folders();
      for (const folder of folders.folders || []) {
        await cloudinary.api.delete_folder(folder.name);
        console.log(`Deleted folder: ${folder.name}`);
      }
    } catch (e) {
      // Folders might not exist
    }
    
    console.log(`\n✓ Deleted ${totalDeleted} total resources from Cloudinary`);
  } catch (error) {
    if (error.error && error.error.message.includes('empty')) {
      console.log('✓ Cloudinary is already empty');
    } else {
      console.error('Error:', error.message || error);
    }
  }
}

async function uploadAllImages() {
  console.log('\nUploading images to Cloudinary...\n');
  
  const publicDir = path.join(__dirname, '..', 'public');
  const categories = ['Events', 'Sports', 'Portraits'];
  let totalUploaded = 0;
  
  for (const category of categories) {
    const categoryPath = path.join(publicDir, category);
    
    if (!fs.existsSync(categoryPath)) {
      continue;
    }
    
    if (category === 'Portraits') {
      // Portraits are directly in the folder
      const files = fs.readdirSync(categoryPath);
      const images = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
      
      for (const image of images) {
        const imagePath = path.join(categoryPath, image);
        const publicId = `Portraits/${path.parse(image).name}`;
        
        try {
          await cloudinary.uploader.upload(imagePath, {
            public_id: publicId,
            overwrite: true,
            resource_type: 'image'
          });
          totalUploaded++;
          console.log(`✓ Uploaded: ${publicId}`);
        } catch (error) {
          console.error(`✗ Failed: ${publicId} - ${error.message}`);
        }
      }
    } else {
      // Events and Sports have subfolders (albums)
      const albums = fs.readdirSync(categoryPath, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);
      
      for (const album of albums) {
        const albumPath = path.join(categoryPath, album);
        const files = fs.readdirSync(albumPath);
        const images = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
        
        for (const image of images) {
          const imagePath = path.join(albumPath, image);
          const publicId = `${category}/${album}/${path.parse(image).name}`;
          
          try {
            await cloudinary.uploader.upload(imagePath, {
              public_id: publicId,
              overwrite: true,
              resource_type: 'image'
            });
            totalUploaded++;
            console.log(`✓ Uploaded: ${publicId}`);
          } catch (error) {
            console.error(`✗ Failed: ${publicId} - ${error.message}`);
          }
        }
      }
    }
  }
  
  console.log(`\n✓ Uploaded ${totalUploaded} images to Cloudinary`);
}

async function main() {
  const action = process.argv[2];
  
  if (action === 'delete') {
    await deleteAllResources();
  } else if (action === 'upload') {
    await uploadAllImages();
  } else if (action === 'all') {
    await deleteAllResources();
    await uploadAllImages();
  } else {
    console.log('Usage:');
    console.log('  node cloudinary-manage.js delete  - Delete all Cloudinary files');
    console.log('  node cloudinary-manage.js upload  - Upload all images');
    console.log('  node cloudinary-manage.js all     - Delete then upload');
  }
}

main().catch(console.error);
