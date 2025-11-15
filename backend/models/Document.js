import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    fileUrl: { type: String, required: true },
    fileType: { type: String },
    extractedText: { type: String },
    categories: [{ type: String }],
    uploadedBy: { type: String },
    size: { type: Number },
},{
    timestamps: true
})

const Document = mongoose.model("Document",documentSchema);
export default Document;