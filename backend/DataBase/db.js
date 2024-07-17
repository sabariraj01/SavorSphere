const mng = require('mongoose')
require('dotenv').config()

const connectDB=()=> 
{
    mng.connect(process.env.MONGO_URL)
    .then(()=> 
    {
        console.log('DB Connected..');
    })
    .catch((err)=> 
    {
        console.log(`Connection failed in server.js due to ${err}`);
    });
}

module.exports = {
    connectDB
}