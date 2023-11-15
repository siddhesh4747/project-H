import express from "express";
import multer from "multer";
import {
  createProject,
  deleteProject,
  downloadPDF,
  getPhotos,
  getProjects,
  updateProject,
} from "../controller/doneProject.js";
import authenticateJWT from "../middleware/auth.js";

const router = express.Router();

// Use memory storage for Multer
const upload = multer({ storage: multer.memoryStorage() });

const cpUploads = upload.fields([
  { name: "photos", maxCount: 5 },
  { name: "pdfs", maxCount: 5 },
]);

// Create a new project
// Protect the route using the authentication middleware
router.post("/add", authenticateJWT, cpUploads, createProject);

// Get all projects for the user
router.get("/allProjects", authenticateJWT, getProjects);

//Get a photos for the user
router.get("/photos/:projectId", authenticateJWT, getPhotos);

// Add a route for downloading PDF by project ID
router.get("/download-pdf/:projectId", authenticateJWT, downloadPDF);

// Update a specific project
router.patch("/update/:projectId", authenticateJWT, cpUploads, updateProject);

// Delete a specific project
router.delete("/delete/:projectId", authenticateJWT, deleteProject);

export default router;
