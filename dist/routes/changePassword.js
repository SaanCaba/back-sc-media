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
const User = require('../models/user');
const bcrypt = require('bcrypt');
const router = Router();
router.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, password } = req.body;
        //hasheamos la nueva pass
        const salt = yield bcrypt.genSalt(Number(process.env.NEXT_PUBLIC_SALT));
        const hashPassword = yield bcrypt.hash(req.body.password, salt);
        // faltaría modificar el user especifico y guardarlo!
        yield User.updateOne({
            _id: id
        }, {
            password: hashPassword
        });
        return res.status(200).send('Contraseña actualizada correctamente!');
    }
    catch (error) {
        return res.status(404).json({ message: 'No se ha podido cambiar la contraseña!' });
    }
}));
module.exports = router;
