import Category from "../models/Category.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find();
    res.json(categories);

})


export const addCategory = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.status(201).json(category);

})