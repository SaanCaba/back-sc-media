"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Here we are going to connect with the database on mongo using mongoose!
const mongoose = require('mongoose');
const connectionsParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DB, connectionsParams);
        console.log('connected to database');
    }
    catch (error) {
        console.log(error);
        console.log('could not connect to database');
    }
});
module.exports = connect;
