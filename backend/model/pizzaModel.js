const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    pizza_id: Number,
    pizza_name: String,
    pizza_cost: Number,
    pizza_category: String,
    pizza_description: String,
    pizza_image: String
});

module.exports = mongoose.model("Pizza", pizzaSchema);
