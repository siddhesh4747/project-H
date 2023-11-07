import Profile from "../model/profileSchema.js";

//Create a new Papers controller
export const uploadPapers = async (req, res) => {
  try {
    const { title } = req.body;
    const pdf = req.file;

    // Check if req.fields are defined
    if (!req.body) {
      return res.status(400).json({ error: "Request data is missing" });
    }

    // Find the user's profile by their identifier (you need to implement this logic)
    const user = req.user;
    const checkUser = await Profile.findById(user.userId);

    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }
    if (!title) {
      return res.status(400).json({ error: "Title is  required" });
    }
    if (pdf && pdf.size > 10000000) {
      return res.status(400).send({
        error: "PDF size should be less than 10MB.",
      });
    }
    checkUser.papers.push({
      title,
      pdf: {
        data: pdf.buffer,
        mimetype: pdf.mimetype,
      },
    });
    await checkUser.save();
    res.json({ message: "Papers added to the user profile" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error Papers Controller", details: error.message });
  }
};

// Get the Papers Details from database
export const getPapers = async (req, res) => {
  try {
    const user = req.user;

    // Find the user's profile by their identifier (you need to implement this logic)
    const checkUser = await Profile.findById(user.userId);

    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const papers = checkUser.papers;
    const papersTitles = papers.map((project) => project.title);

    res.json({ papersTitles });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error fetching Papers Controller ",
      details: error.message,
    });
  }
};

//Delete Papers Controllers
export const deletepapers = async (req, res) => {
  try {
    const { paperId } = req.params; // Extract paper ID from URL parameters
    const user = req.user;

    // Find the user's profile by their identifier (you need to implement this logic)
    const checkUser = await Profile.findById(user.userId);

    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find and remove the paper with the given ID
    const papersIndex = checkUser.papers.findIndex(
      (paper) => paper._id.toString() === paperId
    );

    if (papersIndex === -1) {
      return res.status(404).json({ error: "Papers not found" });
    }

    checkUser.papers.splice(papersIndex, 1);
    await checkUser.save();
    res.json({ message: "Papers deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error deleting Papers Controller",
      details: error.message,
    });
  }
};
