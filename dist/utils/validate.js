"use strict";
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const validate = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label("Username"),
        password: passwordComplexity().required().label("Password"),
        email: Joi.string().required().label("Email")
    });
    return schema.validate(data);
};
module.exports = validate;
