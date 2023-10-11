
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/productList?retryWrites=true&w=majority")

const Schema= mongoose.Schema
const ProductSchema = new Schema({
    category:{type:String},
    subcategory:{type:String},
    product:{type:String}
})

const ProductModel = mongoose.model('product_tb',ProductSchema)
module.exports=ProductModel