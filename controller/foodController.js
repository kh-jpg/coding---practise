const foodModel = require('../model/foodModel');
const { setRedisDataByKey, getRedisDataByKey}=require('../middleware/redis');
const createFood=async(req,res) => {
    try {
    const {
        resturantid,
        name,
        imageurl,
        price,
        category,
        rating
    } = req.body;
    
     const newFood = new foodModel({
        resturantid:resturantid,
        name:name,
        imageurl:imageurl,
        price:price,
        category:category,
        rating:rating
     });
     const result =await newFood.save();
     res.status(200).send({
        result,
        "success":true,
        "message": "Food item created  successfully"
    
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
const listAllFoodsForResturant = async (req, res) => {
    //const { resturantid } = req.params;
    //const foods = await foodModel.find({ resturantid });
    const foods = await foodModel.find();
    res.status(200).send({
        foods,
        success: true,
        message: "Foods listed successfully"
    });
};
module.exports = {
    createFood,
      listAllFoodsForResturant
}