// const mongoose = require('mongoose'); 
const Products = require('../models/Products');


const getProducts  = async (req , res) =>{
    try {
         const getProducts = await Products.aggregate([
        {
            $match: {
                inStock: true,
                price: { $gte: 100 }
            }
        },
        {
            $group : {
                _id: '$category',
                avgprice : {
                    $avg : "$price"
                },
                count : {
                    $sum : 1
                }
            }
        }

    ]);       
            res.status(200).json({
                success :  true,
                data : getProducts  
            })    
            console.log(typeof getProducts)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message : "Some error occured occured",
            success : false
        })
    }
}

const insertProducts = async (req , res)=>{
    try {
    const sampleProducts = [
  {
    name: "Wireless Mouse",
    category: "Electronics",
    inStock: true,
    tags: ["computer", "accessories", "wireless"],
    price: 899
  },
  {
    name: "Bluetooth Headphones",
    category: "Electronics",
    inStock: true,
    tags: ["audio", "bluetooth", "music"],
    price: 2499
  },
  {
    name: "Yoga Mat",
    category: "Fitness",
    inStock: false,
    tags: ["exercise", "home", "health"],
    price: 699
  },
  {
    name: "Water Bottle",
    category: "Home & Kitchen",
    inStock: true,
    tags: ["bottle", "kitchen", "hydration"],
    price: 299
  },
  {
    name: "Running Shoes",
    category: "Footwear",
    inStock: true,
    tags: ["sports", "men", "comfort"],
    price: 3499
  },
  {
    name: "Smartwatch",
    category: "Electronics",
    inStock: true,
    tags: ["wearable", "fitness", "bluetooth"],
    price: 5999
  },
  {
    name: "Notebook",
    category: "Stationery",
    inStock: true,
    tags: ["office", "writing", "paper"],
    price: 129
  },
  {
    name: "LED Desk Lamp",
    category: "Home & Lighting",
    inStock: false,
    tags: ["lamp", "study", "light"],
    price: 1099
  },
  {
    name: "Gaming Keyboard",
    category: "Electronics",
    inStock: true,
    tags: ["gaming", "keyboard", "RGB"],
    price: 2999
  },
  {
    name: "Backpack",
    category: "Travel",
    inStock: true,
    tags: ["bag", "travel", "school"],
    price: 1899
  }
];
    const result = await Products.insertMany(sampleProducts);

    res.status(200).json({
        message:"Products inserted successfullt",
        success :  true,
        data: `Inserted Products are ${result.length}` 
    })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message : 'Some error occured',
            success : false
        })
        
    }
}

module.exports = {insertProducts , getProducts};
