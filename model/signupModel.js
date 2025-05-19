const mongoose =require('mongoose');
//schema design
const signupSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    
    },
     email:{
        type:String,
        required:true
       // unique:true    
    },
      mobile:{
        type:String,
        required:true
       // unique:true    
    },
     password:{
        type:String,
        required:true
     },
     profileImage:{
        type:String
     }
 },
    {
        timestamps:true
    }      
);
//export our schema
module.exports=mongoose.model("Signups",signupSchema);
//const signupModel=mongoose.model("signups",signupSchema);
//module.exports=signupModel;