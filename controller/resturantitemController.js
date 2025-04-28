const resturantitem = require('../model/resturantModel');
const { setRedisDataByKey, getRedisDataByKey}=require('../middleware/redis');
const mongoose =require("mongoose");
const ObjectId= mongoose.Types.ObjectId;
const  getresturant = async (req,res) =>{
  try{
       const resturantid = req.body.resturantid;
 //  if(resturantid!= new ObjectId(resturantid))
      /* if(!ObjectId.isValid(resturantid)){
        console.log(1);
        return res.status(400).json({message:"Invalid resturantid"});
    }*/
    const item = await resturantitem.findOne({_id: resturantid});
    console.log(item);
    if(!item) {
        console.log(2);
         return res.status(404).json({message:"resturant not found"});
    }
       
     return res.status(200).json(item);
    }
         catch (error) {
        
        console.log(error);
       // return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong");
         return  res.status(500).json({message:"Error fetching resturant items",error});
      
         }
};

module.exports = {
   getresturant
}