import { Request, Response } from "express";
const { Router } = require('express');
const router = Router()
const Product = require('../models/product')
const { cloudinary } = require('./utils/cloudinary')


router.post('/', async (req:Request,res: Response) => {
    try {
        const {name, img, category} = req.body

        const uploadedResponse = await cloudinary.uploader.upload(img, {
            upload_preset: 'dev_setups'
        })

        await new Product({
            name: name,
            img:uploadedResponse.url,
            category: category
        }).save()

        return res.status(200).send('Publicado!')
    } catch (error) {
        console.log(error)
        return res.status(404).json({message: 'Archivo inválido, intenta con otro archivo.'})
    }
})





module.exports = router