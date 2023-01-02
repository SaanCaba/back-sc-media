import { Request, Response } from "express";
const { Router } = require('express');
const products = require('./data/products')
const Product = require('../models/product')
const router = Router()

router.get('/', async (req: Request,res: Response) => {
    let productsDB = await Product.find({})
   return res.status(200).json(productsDB)
})


module.exports = router