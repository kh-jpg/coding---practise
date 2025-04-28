const express =require('express');
const puppeteer = require("puppeteer");
const path=require("path");

async function generatepdf(order) {
    const orderData ={
        orderId :1001,
        Time:'10PM',
        Date:'11/12/2025',
        Item:'Briyani',
        quantity:1,
        Total_Price:5000,
        payment:'online'
    };
    console.log(orderData);

    try{
    const browser = await puppeteer.launch({headless:false});
    const page =await browser.newPage();
    const htmlContent=`
    <h1>Order Details</h1>
    <p>Order No: ${orderData.orderId}</p>
    <p>Time: ${orderData.Time}</p>
     <p>Date: ${orderData.Date}</p>
      <p>Item: ${orderData.Item}</p>
       <p>Quantity: ${orderData.quantity}</p>
        <p>Total Price: ${orderData.Total_Price}</p>
         <p>Payment: ${orderData.payment}</p>
          <p>Thank you</p>
          `;
    await page.setContent(htmlContent);
    const pdfBuffer=await page.pdf({format:"A4"});
    return pdfBuffer;
    /*await browser.close();
    res.setHeader('Content-Tye','application/pdf');
    res.setHeader('Content-Disposition',`attachment;filename="order_${orderId}.pdf"`);
    res.send(pdfBuffer);*/
     }
     catch(error){
           console.log("Error generating pdf:",error);
         return res.status(500).send('Error generating pdf');
     }
};
    
    module.exports =
    generatepdf