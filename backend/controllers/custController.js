const Cust = require('../model/custModel');

const fetch_customers = async (req, res) => {
    try {
        const customers = await Cust.find();
        console.log('Data sent');
        res.json(customers);
    }
    catch (error) {
        console.log('Fetch error :- ', error);
        res.json({ 'message': error });
    }
};

const insert_customer = async (req, res) => {
    const customer = new Cust({
        cust_name: req.body.cust_name,
        cust_password: req.body.cust_password,
        cust_email: req.body.cust_email,
        cust_address: req.body.cust_address,
        cust_contact: req.body.cust_contact
    });
    try {
        const savedCustomer = await customer.save();
        console.log('Customer inserted');
        res.send(savedCustomer);
    }
    catch (error) {
        res.status(400).send(error);
    }
};

const update_customer = async (req, res) => {
    const cust_email = req.body.cust_email;
    const customerUpdate = {
        cust_name: req.body.cust_name,
        cust_password: req.body.cust_password,
        cust_address: req.body.cust_address,
        cust_contact: req.body.cust_contact,
        token: req.body.token
    };
    try {
        const updatedCustomer = await Cust.updateOne({ cust_email }, customerUpdate);
        if (updatedCustomer.modifiedCount != 0) {
            console.log('Customer Updated', updatedCustomer);
            res.send({ 'update': 'success' });
        } else {
            console.log('Customer not updated');
            res.send({ 'update': 'Record Not Found' });
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
};

const delete_customer = async (req, res) => {
    const cust_email = req.body.cust_email;
    try {
        const deletedCustomer = await Cust.deleteOne({ cust_email });
        if (deletedCustomer.deletedCount != 0) {
            console.log('Customer Deleted');
            res.send({ 'delete': 'success' });
        } else {
            console.log('Customer Not deleted');
            res.send({ 'delete': 'Record Not Found' });
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    fetch_customers,
    insert_customer,
    update_customer,
    delete_customer
};
