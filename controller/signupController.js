 const { handleResponse, handleErrorReponse } = require("../helpers/response");
const { errorMessage, statusCode } = require("../config/configuration.json");
const signupModel=require('../model/signupModel');
const bcrypt=require('bcrypt');
const logger = require('../helpers/logger');
const routepath = 'controller/signupController';
const signupController = async (req, res) => {
     logger.log({ level: 'info', label: routepath, message: 'signup function execution start' });
    try {
        console.log('signup controller hit');
        const{name,email,mobile}=req.body
        const user=await signupModel.find({
            email:email
        });
        if(user.length>0){
            console.log('jjj');
            const data = [
                {
                    "msg":"Email/username should be unique"
                }
            ]

            return handleResponse(res, statusCode.OK, data)

        }
        //login to encrypt your password
         const rand_num = Math.floor(1000 + Math.random() * 9000);
        const password = `${rand_num}@Pwd`;
        const encrypted_password =await bcrypt.hash(password,10); //10 is salt
        const newSignup =new signupModel({
            name,email,mobile,password:encrypted_password
        });
        await newSignup.save();
           const data = [
            { 'newsignup': newSignup },
            { 'password': password }
        ]
        return handleResponse(res, statusCode.OK, data);
      
    } catch (error) {
        console.log(error);
        return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong");

    }
}
     const profileImageController=async(req,res)=>{
    try{
            console.log(req.userinfo);
             const loggedinuseremail =req.userinfo.data.email;
             console.log(loggedinuseremail);
          const rs=  await signupModel.updateOne({
               email:loggedinuseremail
        },{
             $set:{profileImage:req.profileImageUrl}
        });
        console.log(rs);
     //   console.log(req.profileImageUrl);
        const data =[{
            profilePublicUrl:req.profileImageUrl,
        },
    req.userinfo
]
    return handleResponse(res,statusCode.OK,data);
    }catch(err){
         console.log(err);
         return handleErrorResponse(res,statusCode.NOT_FOUND,"something went wrong");

    }

}
module.exports = {
    signupController,
    profileImageController
}

   


