import { uploadOnCloudinary } from "../config/cloudinary.js";
import Document from "../models/Document.js";
import { autoCategorize } from "../services/categorizer.js";
import { extractFileText } from "../services/fileParser.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import fs from 'fs'

export const uploadDocument = asyncHandler(async (req, res, next) => {
  const file = req.file;
  if (!file) return next(new ApiError('No file uploaded', 400));

  const uploadUrl = await uploadOnCloudinary(file?.path);
  const extractedText = await extractFileText(file?.path);

  const categories = autoCategorize(extractedText);
  const doc = await Document.create({
    title: file.originalname,
    fileUrl: uploadUrl,
    fileType: file.mimetype,
    size: file.size,
    extractedText,
    categories
  });


  fs.unlinkSync(file.path);


  res.status(201).json({ success: true, message: "Uploaded successfully", doc });
})

export const getDocuments = asyncHandler(async (req, res) => {

  const docs = await Document.find();
  res.json(docs);

})
export const getDocumentById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  const doc = await Document.findById(id);
  if (!doc) return next(new ApiError('Document not found'), 400);
  res.json(doc);
})





export const searchDocuments = asyncHandler(async (req, res) => {
  const { q, category, from, to, sort } = req.query;

  const filter = {};

  if (q) {
    filter.$text = { $search: q };
  }

  if (category && category !== "all") {
    filter.categories = category;
  }

  if (from || to) {
    filter.createdAt = {};
    if (from) filter.createdAt.$gte = new Date(from);
    if (to) filter.createdAt.$lte = new Date(to);
  }

  let sortOption = { createdAt: -1 }; 
  if (sort === "oldest") sortOption = { createdAt: 1 };
  
  const results = await Document.find(filter).sort(sortOption);

  res.json(results);

});