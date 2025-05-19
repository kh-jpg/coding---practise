const mongoose=require('mongoose');
const changePasswordSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    
        oldpassword:{
            type:String,
            required:true
        },
        
        newpassword:{
            type:String,
            required:true
             }
        },

        {
            timestamps:true
        }
    
    );
module.exports=mongoose.model('ChangePassword',changePasswordSchema);