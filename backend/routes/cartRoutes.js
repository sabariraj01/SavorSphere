const express = require('express');
const router = express.Router();
const { fetch_carts, insert_cart_item, update_cart_item, delete_cart_item } = require('../controllers/cartController');

router.get('/fetch', fetch_carts);
router.post('/insert', insert_cart_item);
router.put('/update', update_cart_item);
router.delete('/delete', delete_cart_item);

module.exports = router;
