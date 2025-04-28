const mongoose=require('mongoose');
const coupanSchema=new mongoose.Schema({
    coupanid:{
        type:String,
        required:true
      //  unique:true
    },
     coupancode:{
            type:String,
            required:true
        },
        
        expirydate:{
            type:String,
            required:true
             },

         amount:{
            type:Number,
            required:true
         }, 
         resturantid:{
        type:String,
        required:true
      //  unique:true
    },
     appliedamount:{
            type:Number,
            required:true
         }, 
         isActive:{
             type:String
          //  required:true
         }
       
         
},

        {
            timestamps:true
        }
    
    );
module.exports=mongoose.model('coupan',coupanSchema);