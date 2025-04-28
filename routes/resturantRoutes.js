const express = require("express");
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { createResturant } = require('../controller/ResturantController');
const uploadHandler=require('../middleware/uploadcloudinary');
//const multer = require("multer");
//impoert fileupload middleware
const upload =require('../middleware/fileupload');
router.post("/createresturant",createResturant);

//single file upload
router.post("/uploadcover",upload.single('file'),(req,res)=>{
    res.json({message:'File upload successfully'})
});

//Multiple file upload
router.post("/uploadgallery",upload.array('galleryimages'),(req,res)=>{
    res.json({message:'File upload successfully'})
});

//Multiple fields with fileupload
router.post("/uploaddocs",upload.fields([
    {
        name:'aadhar',maxCount:1
    },
    {
        name:'pan',maxCount:1
    }
]),(req,res)=>{
    res.json({message:'File upload successfully'})
});

 //cloudinary upload
// router.post("/uploadcloudinary",authenticateJWT,uploadHandler,profileImageController);
  //  console.log("Route hitted");
   // res.send('File uploaded Successfully');
 

module.exports = router;