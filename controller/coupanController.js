const coupanModel = require('../model/coupanModel');
const { setRedisDataByKey, getRedisDataByKey}=require('../middleware/redis');
const createcoupan=async(req,res) => {
    try {
    const {
        coupanid,
        coupancode,
        expirydate,
        amount,
        resturantid,
        appliedamount,
        isActive
    } = req.body;
    
     const newcoupan = new coupanModel({
       coupanid: coupanid,
        coupancode:coupancode,
        expirydate:expirydate,
        amount:amount,
        resturantid:resturantid,
        appliedamount:appliedamount,
        isActive:isActive
        
     });
     const result =await newcoupan.save();
     res.status(200).send({
        result,
        "success":true,
        "message": "coupan detail save successfully"
    
     });
}
catch(error){
    console.error("error:",error);
    res.status(500).json({
        success:false,
        message:"Internal server Error",
        error:error.message
    });
}
}
module.exports = {
    createcoupan
    
}