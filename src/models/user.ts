export{}
const mongoose = require('mongoose')

type IUser = {
    username: string,
    password: string
}

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String
})

let userModel = mongoose.model('user', userSchema)

module.exports = userModel