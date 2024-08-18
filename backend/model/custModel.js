const mng = require('mongoose');

const custSchema = new mng.Schema({
    cust_name: {
        type: String,
        required: true
    },
    cust_password: {
        type: String,
        required: true
    },
    cust_email: {
        type: String,
        unique: true,
        required: true
    },
    cust_address: String,
    cust_contact: Number,
    token: String
});

module.exports = mng.model("Cust", custSchema);







