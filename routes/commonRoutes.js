const express = require("express");
const router = express.Router();
router.get("/heartbeat",(req,res)=>{
       console.log('This is Heartbeat Route');
       res.send('Heartbeat');
});
router.get("/home",()=>{
       console.log('This is Homepage Route');
});
router.get("/userlist",()=>{
       console.log('This is Userlist Route');
});
module.exports=router;