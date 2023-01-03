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
const Product = require('../models/product');
const router = Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        const { id } = req.query;
        let product = yield Product.find({ _id: id });
        if (!product) {
            return res.status(404).send('NO HAY PRODUCTOOO');
        }
        return res.status(200).send(product);
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'ERROR!' });
    }
}));
module.exports = router;
