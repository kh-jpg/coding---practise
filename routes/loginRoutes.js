const express = require("express");
const { loginController,sendotp,verifyotp} = require("../controller/loginController");
const {validate}=require("express-validation");
const{loginvalidate}=require("../validation");

const router = express.Router();

/*router.get("/login",()=>{
    console.log('This is login Route');
})*/

router.post("/login",validate(loginvalidate.loginvalidation),loginController);
router.post("/loginwithotp",validate(loginvalidate.sendotpvalidation_v2),sendotp);
 router.post("/verifyotp",validate(loginvalidate.verifyotpvalidation_v3),verifyotp);
module.exports=router;