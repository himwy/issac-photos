const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '.env.local' });

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function listAllImages() {
  let all = [];
  let next_cursor = undefined;
  do {
    const res = await cloudinary.api.resources({
      type: 'upload',
      max_results: 500,
      next_cursor
    });
    all = all.concat(res.resources);
    next_cursor = res.next_cursor;
  } while (next_cursor);
  console.log('Total images on Cloudinary:', all.length);
  const ids = all.map(img => img.public_id + (img.format ? ('.' + img.format) : ''));
  require('fs').writeFileSync('cloudinary-image-list.txt', ids.join('\n'));
  console.log('Wrote cloudinary-image-list.txt with', ids.length, 'files');
}

listAllImages();
