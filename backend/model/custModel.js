const mng = require('mongoose');

const custSchema = new mng.Schema({
    cust_name: String,
    cust_password: String,
    cust_email: String,
    cust_address: String,
    cust_contact: Number,
    token: String
});

module.exports = mng.model("Cust", custSchema);
