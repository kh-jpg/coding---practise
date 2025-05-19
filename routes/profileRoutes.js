const express =require("express");
const { viewProfile } = require("../controller/profileController");
const router = express.Router();
const{authenticateJWT}=require("../middleware/authentication");
//const { viewprofile } = require("../controller/profileController");
//router.get("/viewprofile",viewprofile);
router.get("/viewprofile",authenticateJWT,viewProfile);
module.exports=router;
