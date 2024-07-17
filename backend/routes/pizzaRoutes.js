const express = require('express');
const router = express.Router();
const { pizzas_all,
    insert_pizza,
    update_pizza,
    delete_pizza } = require('../controllers/pizzaController');

router.get('/fetch', pizzas_all);
router.post('/insert', insert_pizza);
router.put('/update', update_pizza);
router.delete('/delete', delete_pizza);

module.exports = router;
