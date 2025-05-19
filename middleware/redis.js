const redis = require('redis');
//const client =redis.createClient();
//await client.connect();
const { error } = require('winston');
let redisclient;
(async()=>{
    redisclient= redis.createClient({
        url:`redis://127.0.0.1:6379`
    });
    redisclient.on('ready',()=>{
        console.log('Redis Client is connected')
    });
    redisclient.on('error', (error) => {
        console.log('Redis Client throw error' + error)
    });
    await redisclient.connect();

})();

const setRedisDataByKey = async (datakey, data) => {
    try {
        await redisclient.set(datakey, JSON.stringify(data), {
            EX: process.env.REDIS_EXPIRE
        });
    } catch (err) {
        console.log(err)
    }
}
const getRedisDataByKey = async (datakey) => {
    try {
        console.log("Fetching from redis");
        const cachedData = await redisclient.get(datakey);
        console.log("cached data from redis");
        if (cachedData) {
            return JSON.parse(cachedData)
        }
        return null
    } catch (err) {
        console.log(err)
    }
}
//function to flush all data in redis
const  flushRedis = async  ( ) => {
    try {
         await redisclient.flushDb();
         await redisclient.flushAll();
         return { status:'sucess',message:'Redis has been flushed'};
    }
    catch(error){
    return { status:'error', message: "Failed to flush Redis:",error:error.message};
}
};
const deletekeyRedis = async (key) =>{
    try {
        const result=await redisclient.del(key);
        if(result) {
            return { status:"success",message:`key '${key}' has been deleted`};
        }
        else {
            return { status:"error",message:`key '${key}' not found`};
        }
    }
catch(error) {
    return { status:'error', message: "Failed to delete key:",error:error.message};
}
};


async function getcachedData(req,res,next){
    if(req?.headers?.resetcache==='true'){
        const key=req.url;
        try{
            await redisclient.del(key)
        }
        catch(err){
            console.log(err);
        }
        return next();
    }
const key=req.url;
let results;
try{
    const cachedResults=await redisclient.get(key);
    if(cachedResults)
    {
       results=JSON.parse(cachedResults);
    }
    else{
           next()
    }
}
   catch(err) {
    res.status(404)
   } 
}
async function setcachedData(req,result) {
    const key=req.url;
    try{
         await redisclient.set(key,JSON.stringify(result), {
           EX: process.env.REDIS_EXPIRE
        });
    }
    catch(err){
        res.status(404);
    }
}

module.exports = {
    setRedisDataByKey,
    getRedisDataByKey,
    flushRedis,
    deletekeyRedis,
    redisclient,
    setcachedData,
    getcachedData
}