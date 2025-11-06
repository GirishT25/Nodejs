const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : String,
    category : String ,
    inStock :   Boolean,
    tags : [String],
    price  : Number 
})

module.exports = mongoose.model('Products' , productSchema);    
