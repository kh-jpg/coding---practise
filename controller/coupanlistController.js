const coupanModel = require('../model/coupanModel');
const { setRedisDataByKey, getRedisDataByKey, setcachedData}=require('../middleware/redis');
 const coupanlist =async(req,res) => {
    try{
    let coupan,coupan_list;
    coupan_list = await getRedisDataByKey('coupanlist');
       if (coupan_list) { // when data is in redis
        console.log('comes from redis');
        coupan = coupan_list
        coupan_list=JSON.parse(coupan_list);
    } else {
        // when data not in redis
       console.log('comes from database');
        coupan_list = await coupanModel.find({isActive:"true"}); // mongodb call
        console.log(coupan_list);
        await setRedisDataByKey('coupanlist',JSON.stringify(coupan)); // set data in redis
     
       
   }

    res.status(200).send({
        coupan_list,
        success: true,
        message: " Active coupan  listed successfully"
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
module.exports ={
    coupanlist
}