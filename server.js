//setup express server
const express = require('express');
const app = express();
const dotenv=require("dotenv");
const { globalErrors } = require('./helpers/errorHandlers');
const connectdb=require('./config/db');
const  rateLimit = require('express-rate-limit'); 
const redisclient=require("./middleware/redis");
const cors =require("cors");
dotenv.config();
app.use(express.json());
app.use(cors());
connectdb();
const apiprefix =process.env.APIPREFIX;
//API hit limitation 
   const limiter = rateLimit({
    windowMs: 2 * 60 * 1000, // 2 minutes
    limit: 4, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
});

 app.use(limiter);

      app.use(apiprefix,require("./routes/commonRoutes"));
      app.use(apiprefix,require("./routes/loginRoutes"));
      app.use(apiprefix,require("./routes/orderRoutes"));
      app.use(apiprefix,require("./routes/signupRoutes"));
      app.use(apiprefix,require("./routes/changePasswordRoutes"));
      app.use(apiprefix,require("./routes/profileRoutes"));
      app.use(apiprefix,require("./routes/resturantRoutes"));
      app.use(apiprefix,require("./routes/resturantlistRoutes"));
       app.use(apiprefix,require("./routes/foodRoutes"));
       app.use(apiprefix,require("./routes/logRoutes"));
       app.use(apiprefix,require("./routes/resturantitemRoutes"));
        app.use(apiprefix,require("./routes/placeorderRoutes"));
         app.use(apiprefix,require("./routes/coupanRoutes"));
          app.use(apiprefix,require("./routes/coupanlistRoutes"));
        app.use(apiprefix,require("./routes/pdfRoutes"));

       const apivprefix=process.env.APIVPREFIX;
       app.use(apivprefix,require('./routes/redisRoutes'));
       
      
      const api_prefix=process.env.API_PREFIX;
       app.use(api_prefix,require("./routes/registrationRoutes")); 
      app.use(globalErrors);
     const PORT=process.env.PORT || 7000;
     app.listen(PORT,()=>{
    console.log(`Your express server started on port ${PORT}`);
    console.log(process.env.TOKEN)
     })
//app.use(cors);

   /*  app.get('/',(req,res)=>{
    res.send("Hello i am from express server");
    })

   app.get('/home',(req,res)=>{
    res.send('Hello i am from homepage');
})

    app.get('/faq',(req,res)=>{
    res.send('Hello i am from faq');
     })
     
     
    app.get('/aboutus',(req,res)=>{
      res.send('Hello I am from aboutus page');
       })*/
    