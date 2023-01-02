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
const Product = require('../models/product');
const { cloudinary } = require('./utils/cloudinary');
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, img, category } = req.body;
        const uploadedResponse = yield cloudinary.uploader.upload(img, {
            upload_preset: 'dev_setups'
        });
        yield new Product({
            name: name,
            img: uploadedResponse.url,
            category: category
        }).save();
        return res.status(200).send('Publicado!');
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'Archivo inválido, intenta con otro archivo.' });
    }
}));
module.exports = router;
