import { Request, Response } from "express";
const { Router } = require('express');
const router = Router()
const Company = require('../models/company')
const validate = require('../utils/validateLogin')
const bcrypt  = require( 'bcrypt')
const generateAuthToken = require('../utils/token')

router.post('/', async (req:Request,res:Response) => {
    console.log(req.body)
    
    try {
        // run db
            const {error} = validate(req.body)
            if(error){
                return res.status(400).send({message:'ERROR ' + error.details[0].message})
            }
            console.log(Company)
            const company = await Company.findOne({name : req.body.name})
            if(!company){
            return res.status(401).send({message: 'ERROR ' + "Invalid email or password"})
            }
            
            const validPassword = await bcrypt.compare(
                req.body.password, company.password
            )
            
            if(!validPassword){
                return res.status(401).send({message:'ERROR ' + "Invalid email or password"})
            }
            
            const token = generateAuthToken()
            //obtenemos el _id del usuario logeado, y la mandamos al front para usarla!
            let id = company._id
            let idConvert = id.toString()
            res.status(200).send({data: token, id: idConvert, username: company.name,  message: "Logged in succesfully"})


    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Internal server Error!"}) 

    }
})



export {};
module.exports = router