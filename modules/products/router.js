const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('./controller');

/* GET product listing */
router.get('/', async function (req, res, next) {
  const products = await getProducts();
  console.log("GET PROPORPOR")
  console.log(req.get('access-token'))
  res.json(products);
});
/** Create product */
router.post('/', async function (req, res, next) {
  const response = await createProduct(req.body);
  res.json(response);
});

module.exports = router;
