const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/productList?retryWrites=true&w=majority")

const Schema = mongoose.Schema
const CategorySchema = new Schema({
    catId : {type:mongoose.Types.ObjectId,ref:"category_tb"},
    category: { type: String },
    subcategory: { type: String }
})

const subcategoryModel = mongoose.model('subcategory_tb', CategorySchema)
module.exports = subcategoryModel
