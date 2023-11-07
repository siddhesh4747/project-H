import express from "express";
import multer from "multer";
import authenticateJWT from "../middleware/auth.js";
import {
  deletepapers,
  getPapers,
  uploadPapers,
} from "../controller/paperUpload.js";

const router = express.Router();

// Use memory storage for Multer
const upload = multer({ storage: multer.memoryStorage() });

// Route for uploading a resume
router.post(
  "/upload-papers",
  upload.single("pdf"),
  authenticateJWT,
  uploadPapers
);

//  Get Papers details for the user
router.get("/getpapers", authenticateJWT, getPapers);

//  Delete Papers for the user
router.delete("/papers/:paperId", authenticateJWT, deletepapers);

export default router;
