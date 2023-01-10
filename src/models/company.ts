export{}
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const companySchema = new Schema({
    name : String,
    password: String,
    email: {type:String, unique:true},
    employees : []
})

let companyModel = mongoose.model('company', companySchema)

module.exports = companyModel