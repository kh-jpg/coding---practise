 const cloudinary =require('cloudinary').v2;
// Configuration
    cloudinary.config({ 
        cloud_name: 'decrilxxi', 
        api_key: process.env.CLOUDINARY_API_kEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET   // Click 'View API Keys' above to copy your API secret
    });
    //Log the configuration
    console.log(cloudinary.config());
    module.exports=cloudinary