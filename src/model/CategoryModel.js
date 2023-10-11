const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/productList?retryWrites=true&w=majority")

const Schema = mongoose.Schema
const CategorySchema = new Schema({
    category: { type: String }
})

const CategoryModel = mongoose.model('category_tb', CategorySchema)
module.exports = CategoryModel
