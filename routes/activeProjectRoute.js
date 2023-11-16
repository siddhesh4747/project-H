import express from "express";
import multer from "multer";
import {
  activeProject,
  deleteActiveProject,
  getActiveProjects,
} from "../controller/activeProject.js";
import authenticateJWT from "../middleware/auth.js";

const router = express.Router();

// Use memory storage for Multer and specify the field name as "pdf"
const upload = multer({ storage: multer.memoryStorage() }).single("pdf");

// Create a new active project
router.post("/add", authenticateJWT, upload, activeProject);

// Get active projects for the user
router.get("/getDetails", authenticateJWT, getActiveProjects);

// Protect the route using the authentication middleware
router.delete("/:projectId", authenticateJWT, deleteActiveProject);

export default router;
