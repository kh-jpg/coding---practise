const bcrypt = require("bcrypt");
//const ChangePassword=require('../model/changePassword');
//const user = require("../model/signupModel");
const signupModel = require("../model/signupModel");
//const User = require("../model/signupModel"); 
const changePasswordController = async (req, res) => {
    try {
        console.log("change password API hit");
        // const email=username;
        const {email, oldpassword, newpassword } = req.body;
        
       // const user = await signupModel.findOne({ email });
        if (!email||!oldpassword||!newpassword) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // const email=username;
        const user = await signupModel.findOne({ email});
        // Verify old password
       // const isMatch = await bcrypt.compare(oldpassword, user.password);
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        const isMatch = await bcrypt.compare(oldpassword, user.password);
        if(!isMatch){
            return res.status(400).json({message:"old password is incorrect"});
        }
   // const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newpassword, 10);
     //   user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
      //  console.error("error in change password controller:",error);
        res.status(500).json({ message: "Server error", error:error.message});
    }
};
module.exports = 
 { changePasswordController } ;
