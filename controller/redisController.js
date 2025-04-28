const { flushRedis,deletekeyRedis } = require('../middleware/redis');
const  flushRedisController  = async(req,res)=> {
     try {
      //  const key= req.body.key;
         console.log("flushing redis");
        const result = await flushRedis();
        console.log("flush result:",result);
        return res.status(200).json({message:"Redis cache cleared"});
    }
    catch(error) {
        console.log("error in flushrediscontroller",error);
        return res.status(500).json({
            message:"something went wrong",
            error:error.message
        });
    }
};

const  deletekeyRedisController  = async(req,res)=> {
     try {
        const key= req.body.key;
         console.log("Deleting key from Redis:",key);
        const result = await deletekeyRedis(key);
        console.log("Delete result:",result);
        return res.status(200).json({message:"key deleted from redis"});
    }
    catch(error) {
        console.log("error in deletekeyrediscontroller",error);
        return res.status(500).json({
            message:"something went wrong",
            error:error.message
        });
    }
};

  

   
module.exports = {
   flushRedisController,
   deletekeyRedisController
    
};