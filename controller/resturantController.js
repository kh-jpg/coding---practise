const resturantModel = require('../model/resturantModel');
const { setRedisDataByKey, getRedisDataByKey,setcachedData,getcachedData}=require('../middleware/redis');
const createResturant=async(req,res) => {
    try {
    const {
        title,
        state,
        city,
        openTime,
        closeTime,
        rating,
        cusine,
        isActive,
        name,
        email,
        address,
        mobile
    } = req.body;
    if(!name||!email||!address||!mobile)
    {
        return res.status(400).json({
            success:false,
            message:"name,email,address and mobile are required!"
        });
    }
     const newResturant = new resturantModel({
        title:title,
        state:state,
        city:city,
        openTime:openTime,
        closeTime:closeTime,
        rating:rating,
        cusine:cusine,
        isActive:isActive,
        name:name,
        email:email,
        address:address,
        mobile:mobile
     });
     const result =await newResturant.save();
     res.status(200).send({
        result,
        "success":true,
        "message": "Resturant detail save successfully"
    
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
    createResturant
}