const Joi = require('joi');

exports.validateRegistration = Joi.object().keys({
    username: Joi.string()
        .min(5)
        .max(10)
        .required(),
    email: Joi.email().required(),
    password: Joi.string()
        .min(5)
        .required() 
});
