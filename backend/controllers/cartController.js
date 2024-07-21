const Cart = require('../model/cartModel');

const fetch_carts = async (req, res)=>
{
    try 
    {
        const carts = await Cart.find();
        console.log('Data sent');
        res.status(200).json(carts);
    } 
    catch(error) 
    {
        console.log('Fetch error :- ', error);
        res.status(500).json({ 'message': error });
    }
};


const insert_cart_item = async (req, res) => 
{
    const cartItem = new Cart({
        pizza_id: req.body.pizza_id,
        pizza_name: req.body.pizza_name,
        pizza_image: req.body.pizza_image,
        pizza_cost: req.body.pizza_cost,
        cust_name: req.body.cust_name,
        quantity: req.body.quantity
    });
    try 
    {
        const savedCartItem = await cartItem.save();
        console.log('Cart item inserted');
        res.status(200).send(savedCartItem);
    } 
    catch (error) {
        res.status(400).send(error);
    }
};


const update_cart_item = async (req, res) => {
    const { pizza_id, cust_name, quantity } = req.body;
    const cartUpdate = {
        pizza_image: req.body.pizza_image,
        pizza_cost: req.body.pizza_cost,
        cust_name,
        quantity
    };
    try {
        const updatedCartItem = await Cart.updateOne({ pizza_id, cust_name }, cartUpdate);
        if (updatedCartItem.modifiedCount != 0) {
            console.log('Cart item Updated', updatedCartItem);
            res.send({ 'update': 'success' });
        } else {
            console.log('Cart item not updated');
            res.send({ 'update': 'Record Not Found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};


const delete_cart_item = async (req, res) => {
    const { pizza_id, cust_name } = req.body;
    try {
        const deletedCartItem = await Cart.deleteOne({ pizza_id, cust_name });
        if (deletedCartItem.deletedCount != 0) {
            console.log('Cart item Deleted');
            res.send({ 'delete': 'success' });
        } else {
            console.log('Cart item Not deleted');
            res.send({ 'delete': 'Record Not Found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    fetch_carts,
    insert_cart_item,
    update_cart_item,
    delete_cart_item
};
