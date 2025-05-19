const express = require("express");
const { registrationController } = require("../controller/registrationController");
const {validate}=require("express-validation");
const{registrationvalidate}=require("../validation");

const router = express.Router();

router.get("/registration",()=>{
    console.log('This is Registration Route');
})

router.post("/registration",validate(registrationvalidate.registrationvalidation),registrationController);
module.exports = router;