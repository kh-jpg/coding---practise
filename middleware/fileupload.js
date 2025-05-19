const multer=require('multer');
//setting storage for our uploaded files
console.log('==========');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log(file);
       // cb(null,'C:\coding---practise/middleware/uploads')
      // console.log(file);
       // cb(null,'middleware/uploads');
       // cb(null,'uploads');
       cb(null,'resturantcoverimages');
      //cb(null,Path.join(__dirname,'middleware/uploads'));

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
});
// Instance creation for multer
const upload=multer({storage:storage});
module.exports = upload;