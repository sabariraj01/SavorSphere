const Pizza = require('../model/pizzaModel.js');


const pizzas_all = async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        console.log('Data sent');
        res.json(pizzas);
    } catch (error) {
        console.log('Fetch error :- ', error);
        res.json({ 'message': error });
    }
};


const insert_pizza = async (req, res) => {
    const pizza = new Pizza({
        pizza_id: req.body.pizza_id,
        pizza_name: req.body.pizza_name,
        pizza_cost: req.body.pizza_cost,
        pizza_category: req.body.pizza_category,
        pizza_description: req.body.pizza_description,
        pizza_image: req.body.pizza_image
    });
    try {
        const savedPizza = await pizza.save();
        console.log('Pizza inserted');
        res.send(savedPizza);
    } catch (error) {
        res.status(400).send(error);
    }
};


const update_pizza = async (req, res) => {
    const pizza_id = req.body.pizza_id;
    const pizzaUpdates = {
        pizza_name: req.body.pizza_name,
        pizza_cost: req.body.pizza_cost,
        pizza_category: req.body.pizza_category,
        pizza_description: req.body.pizza_description,
        pizza_image: req.body.pizza_image
    };
    try {
        const updatePizza = await Pizza.updateOne({ pizza_id }, pizzaUpdates);
        if (updatePizza.modifiedCount != 0) {
            console.log('Pizza Updated', updatePizza);
            res.send({ 'update': 'success' });
        } else {
            console.log('Pizza not updated');
            res.send({ 'update': 'Record Not Found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};


const delete_pizza = async (req, res) => {
    const pizza_id = req.body.pizza_id;
    try {
        const deletedPizza = await Pizza.deleteOne({ pizza_id });
        if (deletedPizza.deletedCount != 0) {
            console.log('Pizza Deleted');
            res.send({ 'delete': 'success' });
        } else {
            console.log('Pizza Not deleted');
            res.send({ 'delete': 'Record Not Found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    pizzas_all,
    insert_pizza,
    update_pizza,
    delete_pizza
};
