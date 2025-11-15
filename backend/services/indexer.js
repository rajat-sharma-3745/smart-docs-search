import Document from "../models/Document.js";

export const createTextIndex = async () => {
    await Document.collection.createIndex({
        title: "text",
        extractedText: "text",
    })
}