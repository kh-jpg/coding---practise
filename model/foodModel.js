const mongoose=require('mongoose');
const foodSchema=new mongoose.Schema({
    resturantid:{
        type:String,
        required:true
      //  unique:true
    },
     name:{
            type:String,
            required:true
        },
        
        imageurl:{
            type:String
           // required:true
             },
         price:{
            type:Number,
            required:true
         }, 
         category:{
            type:String,
            enum:["veg","non-veg"],
            required:true
         } ,
            rating:{
                type:Number,
                default:1,
                min:1,
                max:5
            }
         
},

        {
            timestamps:true
        }
    
    );
module.exports=mongoose.model('Food',foodSchema);