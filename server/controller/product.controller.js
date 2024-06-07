const axios = require('axios');
const asyncHandler = require('express-async-handler');

const fetchProducts = asyncHandler(async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

module.exports = { fetchProducts };
