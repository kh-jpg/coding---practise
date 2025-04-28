 const { handleResponse, handleErrorReponse } = require("../helpers/response");
const { errorMessage, statusCode } = require("../config/configuration.json");

const registrationController = async (req,res) =>{
  try{
        console.log('registration controller hit');
        const data =req.body;
        console.log(data);
      //    return handleResponse(res, statusCode.OK, data)
        
    //logic to verify username and password is correct or not
    

    res.status(200).send({
            success: true,
            message: "user_loggedin successfully",
            data
        })
    } catch (error) {
        
        console.log(error);
       // return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong");
        res.status(400).send({
            success: true,
            message: "Something went wrong"
        })
         }
}

module.exports = {
    registrationController
}