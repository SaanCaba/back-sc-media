export{}

import { Request, Response } from "express";


const { Router } = require('express');

const router = Router()
const bcrypt  = require( 'bcrypt')
const User = require('../models/user')
const validate = require('../utils/validate')


router.post('/', async(req:Request, res: Response) => {
    try {
        console.log(req.body)
        const {error} = validate(req.body)
        if(error){
            return res.status(402).json({message:'ERROR ' + error.details[0].message , error:true})
        }
        const user = await User.findOne({username:req.body.username})
        if(user){
            return res.status(409).send({message:'ERROR ' +  "User with this username already exists", error:true})
        }
        const salt = await bcrypt.genSalt(Number(process.env.NEXT_PUBLIC_SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        await new User({...req.body, password: hashPassword})
        .save()
        res.status(201).send({message: "User created succesfully"})

    } catch (error) {
        console.log(error)
    res.status(500).send({message: "Internal server Error!"}) 
    }
})


module.exports = router