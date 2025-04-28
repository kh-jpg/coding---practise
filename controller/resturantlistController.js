const resturantModel = require('../model/resturantModel');
const { setRedisDataByKey, getRedisDataByKey, setcachedData}=require('../middleware/redis');
 const listResturant =async(req,res) => {
    let resturant,resturant_list;
    resturant_list = await getRedisDataByKey('resturantlist');
       if (resturant_list) { // when data is in redis
        console.log('comes from redis');
        resturant = resturant_list
    } else {
        // when data not in redis
       console.log('comes from database');
        resturant = await resturantModel.find(); // mongodb call
        await setRedisDataByKey('resturantlist', resturant) // set data in redis
       await setcachedData(req,resturant);
       
   }

    res.status(200).send({
        resturant,
        success: true,
        message: "Resturants listed successfully"
    });
}
const listResturantV2=async(req,res)=>{
    resturant= await resturantModel.find();
         await setcachedData(req,resturant);
   

    res.status(200).send({
        resturant,
        success: true,
        message: "Resturants listed successfully"
    });
}
const deleteResturantCache = async (req, res) => {
    try {
        const result = await redisClient.del("resturantlist"); // Redis se delete

        if (result === 1) {
            console.log("resturantlist deleted from Redis");

            // *Fresh data MongoDB se fetch karke Redis me store karein*
             resturant = await resturantModel.find();
            await setRedisDataByKey("resturantlist", resturant);

            return res.status(200).json({
                message: "Cache deleted and refreshed successfully",
                resturant
            });
        } else {
            return res.status(404).json({ error: "Key not found in Redis" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
module.exports = {
    listResturant,
    listResturantV2,
    deleteResturantCache
}


   /* try {
        const resturant = await resturantModel.find();
        res.status(200).json({
            success:true,
            message:"Resturants fetched successfully",
            data:resturant
        });
    }
  
     catch(error)
     {
    
     res.status(400).json({
        "success":false,
        "message": "Error fetching resturants",
        error:error.message
     });
     }
    };  */
     
