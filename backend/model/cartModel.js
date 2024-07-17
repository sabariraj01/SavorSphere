const mng = require('mongoose');

const CartSchema = new mng.Schema({
    pizza_id: Number,
    pizza_name: String,
    pizza_image: String,
    pizza_cost: Number,
    cust_name: String,
    quantity: Number
});

module.exports = mng.model("Cart", CartSchema);
