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
const bcrypt = require('bcrypt');
const Company = require('../models/company');
const validate = require('../utils/validate');
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { error } = validate(req.body);
        if (error) {
            return res.status(402).json({ message: 'ERROR ' + error.details[0].message, error: true });
        }
        const company = yield Company.findOne({ name: req.body.name });
        if (company) {
            return res.status(409).send({ message: 'ERROR ' + "Company with this username already exists", error: true });
        }
        const salt = yield bcrypt.genSalt(Number(process.env.NEXT_PUBLIC_SALT));
        const hashPassword = yield bcrypt.hash(req.body.password, salt);
        yield new Company(Object.assign(Object.assign({}, req.body), { password: hashPassword }))
            .save();
        res.status(201).send({ message: "User created succesfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server Error!" });
    }
}));
module.exports = router;
