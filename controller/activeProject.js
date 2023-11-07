import Profile from "../model/profileSchema.js";

//Create a new Active Project controller
export const activeProject = async (req, res) => {
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
    checkUser.activeProjects.push({
      title,
      pdf: {
        data: pdf.buffer,
        mimetype: pdf.mimetype,
      },
    });
    await checkUser.save();
    res.json({ message: "Active Project added to the user profile" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error active project", details: error.message });
  }
};

// Get the projects Details from database
export const getActiveProjects = async (req, res) => {
  try {
    const user = req.user;

    // Find the user's profile by their identifier (you need to implement this logic)
    const checkUser = await Profile.findById(user.userId);

    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const activeProjects = checkUser.activeProjects;
    const projectTitles = activeProjects.map((project) => project.title);
    const totalProjects = projectTitles.length;

    res.json({ projectTitles, totalProjects });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error fetching active projects",
      details: error.message,
    });
  }
};

//Delete active projects Controllers
export const deleteActiveProject = async (req, res) => {
  try {
    const { projectId } = req.params; // Extract project ID from URL parameters
    const user = req.user;

    // Find the user's profile by their identifier (you need to implement this logic)
    const checkUser = await Profile.findById(user.userId);

    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find and remove the active project with the given ID
    const activeProjectIndex = checkUser.activeProjects.findIndex(
      (project) => project._id.toString() === projectId
    );

    if (activeProjectIndex === -1) {
      return res.status(404).json({ error: "Active project not found" });
    }

    checkUser.activeProjects.splice(activeProjectIndex, 1);
    await checkUser.save();
    res.json({ message: "Active project deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error deleting active project", details: error.message });
  }
};
