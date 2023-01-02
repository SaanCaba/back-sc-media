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
const { cloudinary } = require('./utils/cloudinary');
const router = Router();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fileStr = req.body.data; // img del front
        console.log(req.body);
        console.log('-------------');
        console.log(fileStr);
        const uploadedResponse = yield cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups'
        });
        res.json({ img: uploadedResponse.url });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ err: 'algo salio mal' });
    }
}));
module.exports = router;
