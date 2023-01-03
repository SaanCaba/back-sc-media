import { Request, Response } from "express";
const { Router } = require('express');
const Product = require('../models/product')
const router = Router()

router.get('/',  async (req:Request, res: Response) => {
    try {
        console.log(req.query)
        const {id} = req.query;
        let product = await Product.find({_id: id})
        if(!product){
            return res.status(404).send('NO HAY PRODUCTOOO')
        }
        return res.status(200).send(product)
    } catch (error) {
        console.log(error)
        return res.status(404).json({message: 'ERROR!'})
    }
})

module.exports = router
