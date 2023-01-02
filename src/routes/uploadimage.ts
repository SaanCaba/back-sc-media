export{}

import { Request, Response } from "express";


const { Router } = require('express');
const { cloudinary } = require('./utils/cloudinary')
const router = Router()

router.post('/', async (req: Request,res: Response) => {
    try {
        const fileStr = req.body.data // img del front
        console.log(req.body)
        console.log('-------------')
        console.log(fileStr)
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups'
        })
        res.json({img:uploadedResponse.url})
    } catch (error) {
        console.log(error)
        res.status(500).json({err: 'algo salio mal'})
    }
})


module.exports = router