const placeorderModel = require('../model/placeorderModel');
const { setRedisDataByKey, getRedisDataByKey}=require('../middleware/redis');
const { default: mongoose } = require('mongoose');
const placeorder=async(req,res) => {
    try {
    const {
        resturantid,
        userid,
        useremail,
        usermobile,
        food_id,
        foodname,
        time,
        date,
        coupancode,
        status
    } = req.body;
    
     const placeorder = new placeorderModel({
        resturantid:resturantid,
        userid:userid,
        useremail:useremail,
        usermobile:usermobile,
        food_id:food_id,
        foodname:foodname,
        time:time,
        date:date,
        coupancode:coupancode,
        status:status
     });
     const result =await placeorder.save();
     res.status(200).send({
        result,
        "success":true,
        "message": "order detail save successfully"
    
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
// get total order count for a  customer
  const getordercount=async(req,res)=>{
    try {
        const userid=req.body.userid;
        if(!userid)
        {
             return res.status(400).json({success:false,message:"userid is required"});
        }
        console.log("placeorderModel",placeorderModel);
         const ordercount = await placeorderModel.countDocuments({userid});
         console.log("order count",ordercount);
          return res.status(200).json({success:true,message:"order counted successfully",data:ordercount});

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
  //get order history for a customer
   const getorderhistory=async(req,res)=>{
    try {
        const userid=req.body.userid;
        if(!userid)
        {
             return res.status(400).json({success:false,message:"userid is required"});
        }
        
        const orders=await placeorderModel.find({userid}).sort({createdAt:-1});
        if(orders.length===0)
        {
            return res.status(404).json({success:false,message:"No order history found for this resturant"});
        }

         return res.status(200).json({success:true,message:"order history  received successfully",data:orders});
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
    placeorder,
    getordercount,
    getorderhistory
}