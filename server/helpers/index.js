const Joi = require('joi');

exports.validateRegistration = Joi.object().keys({
    username: Joi.string()
        .min(5)
        .max(10)
        .required(),
    email: Joi
        .string()
        .email()
        .required(),
    password: Joi.string()
        .min(5)
        .required() 
});

exports.firstUpperCase = username => {
    const name = username.toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1);
}

exports.lowerCase = str => {
    return str.toLowerCase();
}
