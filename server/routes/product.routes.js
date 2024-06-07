const express = require('express');
const { fetchProducts } = require('../controller/product.controller');
const { auth } = require('../middlewares/auth.middleware');

const productRouter = express.Router();

productRouter.get('/', auth, fetchProducts);

module.exports = { productRouter };
