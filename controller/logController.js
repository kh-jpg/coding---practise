 const { handleResponse, handleErrorReponse } = require("../helpers/response");
const { errorMessage, statusCode } = require("../config/configuration.json");
const logger = require('../helpers/logger');
const routepath = 'controller/logController';
const path = require('path');
const fs = require('fs');

const logController = async (req, res) => {
     logger.log({ level: 'info', label: routepath, message: 'log controller function execution start' });
    try {
         
         const filename ='../server.log';
         const filepath = path.join(__dirname,filename);
         console.log('corrected filepath:',filepath);
         const fromDate = req.body.fromDate;
         const toDate = req.body.toDate;

        /* const arr=[2,10,1,4];
          const data = arr.filter(elem=>{
              return elem > 2;
         })*/

         //Read file
         const fileContent=await fs.promises.readFile(filepath,'utf-8');
        // console.log(fileContent);
          const logs = fileContent.trim().split('\n');
         // console.log(logs);

         
          //filter is an array function which internally run a loop and take  each element and check 
          // the given condition for every element if the condition satisfy  it will return that 
          // element as array. 
        const filterLogs=logs.filter(log=>{
             const logDate=log.slice(0,10);
             return (logDate >=fromDate) && (logDate <= toDate);
         });
       //  console.log(filterLogs);


       res.status(200).json({"msg":"success",data:filterLogs});   
      
    } catch (error) {
        console.log(error);
      return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong");

    }
}
module.exports = {
    logController
}

   


