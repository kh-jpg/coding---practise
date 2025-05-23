const express =require("express")
const { signupController,profileImageController } = require("../controller/signupController");
const {validate}=require("express-validation");
const{signupvalidate}=require("../validation");
const { authenticateJWT } = require('../middleware/authentication');
const uploadHandler=require('../middleware/uploadcloudinary');
const router = express.Router();
//define our routes

router.post("/signup",validate(signupvalidate.signupvalidation),signupController);
// upload profile using cloudinary and multer
router.post("/uploadprofile",authenticateJWT,uploadHandler,profileImageController);
module.exports = router;