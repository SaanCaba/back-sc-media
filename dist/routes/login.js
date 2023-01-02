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
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
const User = require('../models/user');
const validate = require('../utils/validate');
const bcrypt = require('bcrypt');
const generateAuthToken = require('../utils/token');
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        // run db
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: 'ERROR ' + error.details[0].message });
        }
        console.log(User);
        const user = yield User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).send({ message: 'ERROR ' + "Invalid email or password" });
        }
        const validPassword = yield bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).send({ message: 'ERROR ' + "Invalid email or password" });
        }
        const token = generateAuthToken();
        //obtenemos el _id del usuario logeado, y la mandamos al front para usarla!
        let id = user._id;
        let idConvert = id.toString();
        res.status(200).send({ data: token, id: idConvert, message: "Logged in succesfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server Error!" });
    }
}));
module.exports = router;
