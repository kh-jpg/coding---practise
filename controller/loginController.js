const { handleResponse, handleErrorReponse } = require("../helpers/response");
const { errorMessage, statusCode } = require("../config/configuration.json");
const signupModel = require('../model/signupModel');
const OTPSchema = require('../model/otpModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../helpers/sendEmail');
  const otpModel = require("../model/otpModel");
const logger = require('../helpers/logger');
const routepath = 'controller/loginController'
const loginController = async (req, res) => {
    logger.log({ level: 'info', label: routepath, message: 'Login function execution start' })
    try {
        const { username, password } = req.body;
        const user = await signupModel.find({ email: username }, { name: 1, password: 1 });
        if (user.length > 0) {
        logger.log({ level: 'info', label: routepath, message: 'username Found' })
            const db_pwd = user[0].password;
            const db_name = user[0].name;

            // comapre your given password and stored password 
            const isValid = await bcrypt.compare(password, db_pwd);
            if (isValid) {
                logger.log({ level: 'info', label: routepath, message: 'valid password' })
                const data = {
                    "name": db_name,
                    "email": username
                }

                //logic to create jwt token 
                const token = jwt.sign({ data }, process.env.JWT_SECRETKEY, { expiresIn: '24h' });
                const response = [
                    {
                        "status": 200,
                        "msg": "Login Sucessfuly",
                        "token": token
                    }
                ]
                logger.log({ level: 'info', label: routepath, message: ' successfully send response ' })
                return handleResponse(res, 200, response);
            } else {
                logger.log({ level: 'error', label: routepath, message: 'wrong password' })
                const data = [
                    {    "status": 401,
                        "msg": "Wrong Password"
                    }
                ]
                return handleResponse(res, 200, data);
            }


        } else {
            logger.log({ level: 'error', label: routepath, message: 'wrong username' })
            const data = [
                { 
                     "status": 401,
                    "msg": "wrong username"
                }
            ]
            return handleResponse(res, 200, data);
        }




    } catch (error) {
        //console.log(error);
        logger.log({ level: 'info', label: routepath, message: `Execpetion occur ${error}` });

        return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong")

    }
}

const sendotp = async (req, res) => {
    logger.log({ level: 'info', label: routepath, message: 'send otp  function execution start' })
     console.log('send otp function called');
    try {
        const { username } = req.body;
        console.log("received username:",username);
        const user = await signupModel.find({ email: username });
        if (user.length > 0) {
            console.log("user found in database");
            logger.log({ level: 'info', label: routepath, message: 'username found' })

            //logic to generate otp (1000 to 9000)
            const otp = Math.floor(1000 + Math.random() * 9000);
            console.log("Generated otp",otp);
            // otp send to above email/username
            const email_payload = {
                "to": username,
                "from": process.env.registeredemail,
                "subject": "OTP To Login RESTRO APP",
                "html": `<body>
                   <center>
                     <h2 style='color:red;'>OTP RESTRO APP</h2>
                     <p>Please don't share this OTP</p>
                     <p><b>${otp}</b></p>
                   </center>
                </body>`

            }
            
            // await sendEmail(email_payload);

            //save this otp in our db (purpose to verify otp)
            const newOTP = new OTPSchema({
                email: username, otp, isValid: 1
            });
           logger.log({ level: 'info', label: routepath, message: 'successfully send response' })
            await newOTP.save();
            console.log("otp saved in database");
            res.status(200).json({
                "msg": "Your Otp send to regiseted Email",
                "OTP": otp
            });
        } else {
            console.log("username not found");
            logger.log({ level: 'info', label: routepath, message: ' wrong username' })

            return res.status(400).json({
                "msg": "Username Not Found"
            });
        }


    } catch (error) {
           console.log( "exception occured:", error);
       logger.log({ level: 'info', label: routepath, message: `Execpetion occur ${error}` });
        return res.status(500).json({
            "msg": "Internal Server Error"
        });

    }
}
// ===========================================================================================
   const verifyotp = async (req, res) => {
    try {
        const { username, otp } = req.body;

        const user = await otpModel.findOne({ email: username });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

     //   const storedHashedOtp = user.otp; // Database me stored hashed OTP

        // OTP Compare Karein
       // const isValid = await bcrypt.compare(otp, storedHashedOtp);

       // if (!otp || !storedHashedOtp)
     //  if(!user.otp || user.otpExpiry<Date.now())
       //if (!otp || !storedHashedOtp)
     console.log(user);
     if(user.otp == req.body.otp){
         //   return res.status(400).json({ message: "OTP verified" });
            const token = jwt.sign({ user }, process.env.JWT_SECRETKEY, { expiresIn: '12h' });
             return res.status(200).json({
            message: "OTP verified successfully",
            token: token
        });
        }
        else{
            return res.status(400).json({ message: "OTP missing or incorrect" });
        }

      // const isValid = await bcrypt.compare(otp,storedHashedOtp);
     /*  if(!isValid)
       {
        return
        res.status(400).json({message:"invalid otp"});
       }*/
         

       

    } catch (error) {
        console.error("Error in verifyOTP:", error);
        return res.status(500).json({ message: "Server error" });
    }
}



// ===============================================================================
   /*const verifyotp = async (req, res) => {
    logger.log({ level: 'info', label: routepath, message: 'verifyotp function execution start' })
    try {
        const { username, otp} = req.body;
        const user = await signupModel.find({ email: username });
        if (!user) {
                return 
        res.status(400).json({message:"user not found"});
        }
        logger.log({ level: 'info', label: routepath, message: 'username Found' });
        
            const db_pwd = user[0].otp;
            const db_name = user[0].userame;
            console.log("Received otp:",otp);
            console.log("stored otp:",otp);

            // comapre your given password and stored password 
           // const isValid = await bcrypt.compare(otp, db_pwd);
            if (!db_pwd) {
                logger.log({ level: 'info', label: routepath, message: 'otp not found in database' })
                return
                res.status(400).json({message:"otp not found in database"});
            }
                const data = {
                    "username": db_name,
                    "email": username
                }

                //logic to create jwt token 
                const token = jwt.sign({ data }, process.env.JWT_SECRETKEY, { expiresIn: '24h' });
                const response = [
                    {
                        "msg": "Login Sucessfuly",
                        "token": token
                    }
                ]
                logger.log({ level: 'info', label: routepath, message: ' successfully send response ' })
                return handleResponse(res, statusCode.OK, response);
            } else {
                logger.log({ level: 'error', label: routepath, message: 'wrong otp' })
                const data = [
                    {
                        "msg": "Wrong otp"
                    }
                ]
                return handleResponse(res, statusCode.NOT_FOUND, data);
            }

        } else {
            logger.log({ level: 'error', label: routepath, message: 'wrong username' })
            const data = [
                {
                   "msg": "wrong username"
                }
            ]
            return handleResponse(res, statusCode.NOT_FOUND, data);
        }
    } catch (error) {
        console.log(error);
        logger.log({ level: 'info', label: routepath, message: `Execpetion occur ${error}` });

        return handleErrorReponse(res, statusCode.NOT_FOUND, "something went wrong")

    }
};*/

module.exports = {
    loginController,
    sendotp,
    verifyotp
}