const{Joi}=require('express-validation');
exports.registrationvalidation={
    body:Joi.object({
        username:Joi.string().required(),
        email:Joi.string().required(),
        password:Joi.string().required(),
        mobile:Joi.number().required(),
        address:Joi.string().optional()
    })
}