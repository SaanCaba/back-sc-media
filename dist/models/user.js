"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
});
let userModel = mongoose.model('user', userSchema);
module.exports = userModel;
