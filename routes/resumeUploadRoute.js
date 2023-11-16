import express from "express";
import multer from "multer";
import {
  deleteResume,
  fetchResume,
  uploadResume,
} from "../controller/resumeUpload.js";
import authenticateJWT from "../middleware/auth.js";

const router = express.Router();

// Use memory storage for Multer
const upload = multer({ storage: multer.memoryStorage() });

// Route for uploading a resume
router.post(
  "/upload-resume",
  upload.single("resume"),
  authenticateJWT,
  uploadResume
);

// Route for fetching the resume
router.get("/fetch-resume", authenticateJWT, fetchResume);

// Route for Deleting the resume
router.delete("/delete-resume", authenticateJWT, deleteResume);

export default router;
