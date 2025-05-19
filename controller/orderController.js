/* const { handleResponse, handleErrorReponse } = require("../helpers/response");
const { errorMessage, statusCode } = require("../config/configuration.json");*/

const orderController=async(req , res)=>{
   // res.status(200).send({
          //  "success":true,
              message="Your order created successfully"
  //  })
      if(req.path==="/vieworder"){
        message ="your order viewed successfully";
      }

      if(req.path==="/cancelorder"){
        message ="your order cancel successfully";
      }

      if(req.path==="/orderhistory"){
        message ="your order history saved successfully";
      }

      if(req.path==="/updateorder"){
        message ="your order update successfully";
      }
       //  return handleResponse(res, statusCode.OK, data);

      res.status(200).send({
        success:true,
        message:message
      })
    
}


module.exports={
    orderController
}