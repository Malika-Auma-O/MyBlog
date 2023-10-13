require('dotenv').config();
const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;

const generateToken = (payload) => {
  return jwt.sign(payload, privateKey);
};

module.exports = generateToken;