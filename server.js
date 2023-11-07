import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// configuration
dotenv.config();

//connect Databse
connectDB();

const app = express();
app.use(express.json());

//import api routers
import userRoutes from "./routes/userRoute.js";

//route level middleware to load api router
app.use("/user", userRoutes);

//imports
import ProjectRoute from "./routes/doneProjectRoute.js";
import ActiveRoute from "./routes/activeProjectRoute.js";
import ContactRoute from "./routes/contactProjectRoute.js";
import ResumeRoute from "./routes/resumeUploadRoute.js";
import PaperRoute from "./routes/papersUploadRoute.js";
app.use("/profile", ProjectRoute);
app.use("/profile", ActiveRoute);
app.use("/profile", ContactRoute);
app.use("/profile", ResumeRoute);
app.use("/profile", PaperRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});
