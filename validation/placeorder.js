 const{Joi}=require('express-validation');
    exports.placeordervalidation={
        body:Joi.object({
    resturantid:Joi.string().required(),
    userid:Joi.string().required(),
    useremail:Joi.string().required(),
    usermobile:Joi.number().required(),
    food_id:Joi.string().optional(),
    foodname:Joi.string().required(),
    time:Joi.string().required(),
    date:Joi.string().required(),
    coupancode:Joi.string().required(),
    status:Joi.string().required()
})
}
