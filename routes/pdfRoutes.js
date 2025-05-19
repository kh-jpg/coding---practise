const express =require("express");
const { createpdf} = require("../controller/pdfController");
const router = express.Router();
const{authenticateJWT}=require("../middleware/authentication");
//const { viewprofile } = require("../controller/profileController");
router.post("/pdfcreate",authenticateJWT,createpdf);
//router.post("/pdfget",authenticateJWT,getpdf);
module.exports=router;
