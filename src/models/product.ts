export {}
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    img: String,
    category: String
})

let productModel = mongoose.model('product', productSchema)


module.exports = productModel
