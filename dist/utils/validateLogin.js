"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        password: passwordComplexity().required().label("Password"),
    });
    return schema.validate(data);
};
module.exports = validate;
