const pdfModel =require("../model/pdfModel");
const { setRedisDataByKey, getRedisDataByKey}=require('../middleware/redis');
const generatepdf=require("../utils/generatepdf");
const createpdf=async(req,res)=>{

   try{
    const {
        orderId,
        time,
        date,
        item,
        quantity,
        price,
        payment
    }=req.body;
      const newpdf = new pdfModel({
     orderId:orderId,
        time:time,
        date:date,
        item:item,
        quantity:quantity,
        price:price,
        payment:payment
             });
   const orderData =req.body;
const pdfpath=await generatepdf(orderData);
               res.status(200).send({
     //   result,
        "success":true,
        "message": " pdf created successfully",
       // pdfpath:pdfpath
               });
   }
    catch(error){
        console.error(error);
        res.status(500).json({error:"Failed to create pdf"});
    }
};


module.exports={
    createpdf
 
}