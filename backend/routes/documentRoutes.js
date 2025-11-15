import express from "express";
import { uploadDocument, getDocuments, searchDocuments, getDocumentById } from "../controllers/documentController.js";
import {upload} from "../middlewares/uploadMiddleware.js";


const router = express.Router();


router.post("/upload", upload.single("file"), uploadDocument);
router.get("/all", getDocuments);
router.get("/search", searchDocuments);
router.get("/:id", getDocumentById);


export default router;