
const { Joi } = require('express-validation');

exports.loginvalidation = {
    body: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        accesslevel: Joi.string().optional()
    })
}
 /*exports.loginvalidation_v2 = {
    body: Joi.object({
        username: Joi.string().required(),
    //er().required()
    })
}*/
exports.sendotpvalidation_v2={
    body:Joi.object({
        username:Joi.string().required()
    })
};
 exports.verifyotpvalidation_v3={
     body:Joi.object({
        username: Joi.string().required(),
        otp:Joi.string().length(4).required()
     })
};


exports.forgotpassword = {
    body: Joi.object({
        username: Joi.string().required(),
        old_password: Joi.string().required(),
        new_password: Joi.string().required()
    })
}
