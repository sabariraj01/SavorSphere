const mng = require('mongoose');

const CartSchema = new mng.Schema({
    pizza_id: {
        type: mng.Schema.Types.ObjectId,
        ref: 'Pizza', 
        required: true
    },

    pizza_name: String,
    pizza_image: String,
    pizza_cost: Number,

    cust_name: {
        type: mng.Schema.Types.String,
        ref: 'Cust', 
        required: true
    },
    quantity: Number
});

module.exports = mng.model("Cart", CartSchema);
