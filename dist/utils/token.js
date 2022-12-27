"use strict";
const jwt = require('jsonwebtoken');
const getToken = () => {
    const token = jwt.sign({}, process.env.JWTPRIVATE, { expiresIn: "7d" });
    return token;
};
module.exports = getToken;
