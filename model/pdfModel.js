const mongoose=require('mongoose');
const pdfSchema=new mongoose.Schema({
    orderId:{
        type:String,
        required:true
      //  unique:true
    },
         time:{
            type:String,
            required:true
         } ,
          date:{
            type:String,
            required:true
         } ,
    item:{
            type:String,
            required:true

        },
        
        quantity:{
            type:Number,
            required:true
             },
         price:{
            type:Number,
            required:true
         }, 
         payment:{
            type:String,
            required:true
         } ,
         
     
    
},

        {
            timestamps:true
        }
    
    );
module.exports=mongoose.model('pdf',pdfSchema);