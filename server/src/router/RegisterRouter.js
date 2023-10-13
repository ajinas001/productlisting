const express = require('express');
const CategoryModel = require('../model/CategoryModel');
const ProductModel = require('../model/ProductModel');
const subcategoryModel = require('../model/Subcategorymodel');
const RegisterRouter = express.Router()



RegisterRouter.post('/category', async (req, res) => {
    try {
        const { category } = req.body;
        const details = {
            category: category
        }
        const user = await CategoryModel(details).save()

        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {
        }
    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }

})
RegisterRouter.get('/view-subcategory/:category', async (req, res) => {
    try {
        const category = req.params.category
        console.log('cat', category);
        const details = await subcategoryModel.find({ category })
        console.log("details", details);

        if (details) {
            return res.status(200).json({
                success: true,
                error: false,
                data:details,
            })
        }
        else {
        }
    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't view"
        })
    }

})

RegisterRouter.get('/view-products/:subcategory', async (req, res) => {
    try {
        const subcategory = req.params.subcategory
        console.log('subcat', subcategory);
        const details = await ProductModel.find({ subcategory })
        console.log("detailss", details);

        if (details) {
            return res.status(200).json({
                success: true,
                error: false,
                data:details,
            })
        }
        else {
        }
    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't view"
        })
    }

})


RegisterRouter.post('/subcategory', async (req, res) => {
    try {
        const { category, subcategory,_id } = req.body;
        const details = {
           catId:_id,
            category: category,
            subcategory: subcategory
        }
        const user = await subcategoryModel(details).save()
        // const data = {
        //     catId: details._id
        // }
        // const user1 = await subcategoryModel(data).save()

        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {
        }
    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }

})

RegisterRouter.post('/product', async (req, res) => {
    try {
        const { category, subcategory, product } = req.body;
        const details = {
            category: category,
            subcategory: subcategory,
            product: product
        }
        console.log(details);
        const user = await ProductModel(details).save()

        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {
        }
    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }

})

RegisterRouter.get('/view-category', async (req, res) => {
    // const  {name,category ,description,image,price}=req.body
    // console.log(req.body);
    const category = req.params.id
    const productData = await CategoryModel.find()
    try {
        if (productData) {
            return res.status(200).json({
                success: true,
                error: false,
                data: productData
            })
        }
    }
    catch (error) {
    }
}
)

// RegisterRouter.get('/view-subcategory', async (req, res) => {
//     // const  {name,category ,description,image,price}=req.body
//     // console.log(req.body);
//     const category = req.params.id
//     const productData = await subcategoryModel.find()
//     try {
//         if (productData) {
//             return res.status(200).json({
//                 success: true,
//                 error: false,
//                 data: productData
//             })
//         }
//     }
//     catch (error) {
//     }
// }
// )





module.exports = RegisterRouter