import Profile from "../model/profileSchema.js";

//Upload Resume Controller
export const uploadResume = async (req, res) => {
  try {
    const resume = req.file; // Assuming you use "resume" as the field name in the form for uploading resumes

    // Check if the request includes a resume file
    if (!resume) {
      return res.status(400).json({ error: "Resume file is missing" });
    }

    const user = req.user;

    // Find the user's profile by their identifier (you need to implement this logic)
    const checkUser = await Profile.findById(user.userId);

    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Store the resume file in the user's profile
    checkUser.resume = {
      data: resume.buffer,
      filename: resume.originalname,
      mimetype: resume.mimetype,
    };

    await checkUser.save();
    res.json({ message: "Resume uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error uploading resume",
      details: error.message,
    });
  }
};

//Fetch resume Controller
export const fetchResume = async (req, res) => {
  try {
    const user = req.user;

    // Find the user's profile by their identifier (you need to implement this logic)
    const checkUser = await Profile.findById(user.userId);

    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!checkUser.resume) {
      return res.status(404).json({ error: "Resume not found" });
    }

    const { data, filename } = checkUser.resume;

    // Set the "Content-Type" header based on the resume's mimetype
    res.setHeader("Content-Type", checkUser.resume.mimetype);

    // Set the "Content-Disposition" header to suggest a filename for the browser to download
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);

    // Send the resume data as the response
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error fetching resume",
      details: error.message,
    });
  }
};

export const deleteResume = async (req, res) => {
  try {
    const user = req.user;

    // Find the user's profile by their identifier (you need to implement this logic)
    const checkUser = await Profile.findById(user.userId);

    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!checkUser.resume) {
      return res.status(404).json({ error: "Resume not found" });
    }

    // Remove the resume from the user's profile
    checkUser.resume = undefined;

    await checkUser.save();

    res.json({ message: "Resume deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error deleting resume",
      details: error.message,
    });
  }
};
