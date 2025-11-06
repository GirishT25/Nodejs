
require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Productsroutes = require('./routes/Products-routes')

const connetDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/AdvanceMongoose");
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Database connection failed " , error);
        
    }
}

connetDB();
app.use(express.json());

// routes
app.use('/products' , Productsroutes);


process.env.PORT;
app.listen(process.env.PORT , ()=>{
    console.log(`server is listening on the port ${process.env.PORT}`);
})