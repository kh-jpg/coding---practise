const mongoose=require('mongoose');
const placeorderSchema=new mongoose.Schema({
    resturantid:{
        type:String,
        required:true
      //  unique:true
    },
     userid:{
            type:String,
            required:true

        },
        
        useremail:{
            type:String,
            required:true
             },
         usermobile:{
            type:Number,
            required:true
         }, 
         food_id:{
            type:String,
           // required:true
         } ,
          foodname:{
            type:String,
            required:true
         } ,
          time:{
            type:String,
            required:true
         } ,
          date:{
            type:String,
            required:true
         } ,
           coupancode:{
            type:String,
            required:true
         } ,
          status:{
            type:String,
            required:true
         }          
         
},

        {
            timestamps:true
        }
    
    );
module.exports=mongoose.model('placeorder',placeorderSchema);