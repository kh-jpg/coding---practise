const express = require("express");
const router = express.Router();
const {orderController}=require('../controller/orderController');

router.post("/createorder",orderController);
     //  console.log('Logic to create order');
     /*  res.status(200).send({
              "success":true,
              "message":"Your order created successfully"


       })*/
      // });

       router.get("/vieworder",orderController);
     //  console.log('Logic to view order');
    /*   res.status(200).send({
              "success":true,
              "message":"Your order created successfully"
       })*/

      // });

        
      // router.patch("/cancelorder",() => {
          router.patch("/cancelorder",orderController);
      // console.log('Logic to cancel order');
      /* res.status(200).send({
              "success":true,
              "message":"Your order created successfully"
       })*/
   //    });

        
       router.get("/orderhistory",orderController);
      // console.log('Logic of order history');
      /* res.status(200).send({
              "success":true,
              "message":"Your order created successfully"
       })*/
   //    });
       
       router.put("/updateorder",orderController);
      // console.log('Logic to update order');
      /* res.status(200).send({
              "success":true,
              "message":"Your order created successfully"
       })*/
    //   });

       module.exports =router;