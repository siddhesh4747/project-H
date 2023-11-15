import express from "express";
import multer from "multer";
import authenticateJWT from "../middleware/auth.js";
import {
  createController,
  deleteProject,
  downloadPDF,
  getPhotosData,
  getSingleProject,
} from "../controller/contactPeopleProject.js";

const router = express.Router();

// Use memory storage for Multer
const upload = multer({ storage: multer.memoryStorage() });

const cpUploads = upload.fields([
  { name: "photos", maxCount: 5 },
  { name: "pdfs", maxCount: 5 },
]);

// Create a new Contact pepole(cp) project
router.post("/create", authenticateJWT, cpUploads, createController);

// Get all projects for the user
router.get("/projects/:projectId", authenticateJWT, getSingleProject);

//Get a photos for the user
router.get("/photos/:projectId", authenticateJWT, getPhotosData);

// Add a route for downloading PDF by project ID
router.get("/download-pdf/:projectId", authenticateJWT, downloadPDF);

// Delete a specific project
router.delete("/delete/:projectId", authenticateJWT, deleteProject);

export default router;
