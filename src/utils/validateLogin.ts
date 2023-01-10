export {}
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

interface DataValidate {
    username?:string
    password?:string
}

const validate = (data : DataValidate) => {
    const schema = Joi.object({
        username: Joi.string().required().label("Username"),
        password: passwordComplexity().required().label("Password"),
    })

    return schema.validate(data)
}


module.exports = validate