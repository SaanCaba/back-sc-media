const express = require('express')
const app = express()
const connection = require('./database/connection.ts')

connection()
app.listen(3001, () => console.log('Server run on port ', 3001))