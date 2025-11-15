import {PDFParse} from "pdf-parse";
import mammoth from "mammoth";
import fs from "fs/promises";
import path from "path";

export const extractFileText = async (filePath) => {
    try {
        // load file to memory
        const buffer = await fs.readFile(filePath);
        const ext = filePath.split('.').pop();

        if (ext === "pdf") {

            const parser = new PDFParse({ url: filePath });
            const result = await parser.getText();
            return result.text;
        }


        if (ext === "docx") {
            const data = await mammoth.extractRawText({ path: filePath });
            return data.value;
        }

        return buffer.toString();
    } catch (error) {
        console.log('Error extracting:', error)
    }
}