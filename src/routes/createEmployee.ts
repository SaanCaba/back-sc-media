export {}
import { Request, Response } from "express";
const { Router } = require('express');
const router = Router()

router.get('/', async(req:Request, res:Response) => {
    res.send('HOLAAA')
})






module.exports = router