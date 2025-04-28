const multer=require('multer');
const cloudinary =require('../config/cloudinaryconfig');
const path=require('path');
const fs=require('fs');


    // Configuration
  /*  cloudinary.config({ 
        cloud_name: 'decrilxxi', 
        api_key: process.env.CLOUDINARY_API_kEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET   // Click 'View API Keys' above to copy your API secret
    });*/

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log(file);
        cb(null,'uploads/');      //temporary storage
    },
    filename: (req,file,cb) => {
        console.log(file);
        cb(null,file.originalname);    //temp filename

    }
});
//validate
//Allowed mimetypes
const allowedTypes=['image/jpg','image/jpeg','image/png'];

//setup multer config validation
const upload = multer({
    storage:storage,
    limits:{
        fileSize:10*1024*1024 // 5mb file size
    },
    fileFilter:(req,file,cb)=>{
        if(!allowedTypes.includes(file.mimetype)){
            return cb(new Error('Invalid file type,Allowed type jpg,jpeg,png'));
        }
        cb(null,true); // if file type is valid then continue execution
        
    }

}).single('profileimage');

//middleware function to upload images on cloudinary
const uploadHandler =(req,res,next)=>{
    upload(req,res,async(err)=>{
        if(err instanceof multer.MulterError){
            if(err.code=='LIMIT_FILE_SIZE'){
            return res.status(400).json({
                msg:"File size exceed 10MB"
            })
        }
        return res.status(500).json({
            msg:"Multer Error"
        })
        }else if(err){
            return res.status(500).json({
                msg:" Unknown  type of Error"
            });
        }else{
            try{
                const filePath =path.join('uploads/',req.file.originalname);//create path of  our file
                console.log(filePath);
                const result =await cloudinary.uploader.upload(filePath);  //to upload to cloudinary
               fs.unlinkSync(filePath); // to delete from our local  storage
           //    console.log(result.secure_url);
           //Attach  the cloudinary url to our req object for further use
           req.profileImageUrl =result.secure_url;
               next(); // call next function routes
            }catch(err){
                console.log(err);
                return res.status(500).json({
                    msg:"cloudinary Error"
                })
            }
        }          
    })
}
module.exports =uploadHandler