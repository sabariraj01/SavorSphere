const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    pizza_id: {
        type: Number,
        unique: true, 
        required: true
    },
    pizza_name: {
        type: String,
        required: true
    },
    pizza_cost: {
        type: Number,
        required: true
    },
    pizza_category: String,
    pizza_description: String,
    pizza_image: String
});

module.exports = mongoose.model("Pizza", pizzaSchema);
