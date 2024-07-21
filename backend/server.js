const express = require('express');
const cors = require('cors');
const app = express();
const { connectDB }=require('./DataBase/db')
const morgan = require('morgan')
const helmet = require('helmet')
require('dotenv').config()

const custRoutes = require('./routes/custRoutes')
const pizzaRoutes = require('./routes/pizzaRoutes');
const cartRoutes = require('./routes/cartRoutes');


app.use(helmet())
app.use(morgan('dev'))
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use("/custs", custRoutes); 
app.use("/pizza", pizzaRoutes);
app.use("/cart", cartRoutes);


connectDB()
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
