const mongoose = require("mongoose");
//schema
const resturantSchema = new mongoose.Schema({
    resturantid:String,
   title:{
           type:String,
          required:false
    },
    name:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },

    state:{
        type:String
    },
    city:{
        type:String
    },
    openTime:{
        type:String,
        required:false
    },
    closeTime:{
        type:String,
        required:false
    },
    cusine:{
        type:String,
       // required:true
    },
    rating:{
        type:Number,
        required:false
       /* default:1,
        min:1,
        max:5*/
    },
    
   isActive:{
        type:Boolean
    },
    logoUrl:{
        type:String
    },
    coverImage:{
        type:String
    }
},
{
    timestamps:true
}
);
//export
module.exports = mongoose.model("Resturant",resturantSchema);