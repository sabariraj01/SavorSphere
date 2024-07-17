const express = require('express');
const router = express.Router();
const { fetch_customers,
    insert_customer,
    update_customer,
    delete_customer } = require('../controllers/custController');

router.get('/fetch', fetch_customers)
router.post('/insert', insert_customer)        
router.put('/update', update_customer)
router.delete('/delete', delete_customer)       

module.exports = router;