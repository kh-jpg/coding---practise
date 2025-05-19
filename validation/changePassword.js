const{Joi}=require('express-validation')
exports.changePasswordvalidation={
    body:Joi.object({

        username: Joi.string().required(),
        oldpassword: Joi.string().required(),
        newpassword: Joi.string().required()
    }),
}
//module.exports = validateChangePassword;