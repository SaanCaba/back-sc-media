export{}
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: String,
    lastName: String,
    salary: Number,
    photo: String
})

let employeeModel = mongoose.model('employee', employeeSchema)

module.exports = employeeModel