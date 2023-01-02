import { Request, Response } from "express";
const { Router } = require('express');
const User = require('../models/user')
const bcrypt = require('bcrypt')
const router = Router()


router.put('/', async (req:Request,res: Response) =>{
    try {
        const {id, password} = req.body;
        //hasheamos la nueva pass
        const salt = await bcrypt.genSalt(Number(process.env.NEXT_PUBLIC_SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        // faltaría modificar el user especifico y guardarlo!
        await User.updateOne({
            _id:id
        },
        {
            password: hashPassword
        }
        )
        return res.status(200).send('Contraseña actualizada correctamente!')
    } catch (error) {
        return res.status(404).json({message:'No se ha podido cambiar la contraseña!'})
    }
})





module.exports = router