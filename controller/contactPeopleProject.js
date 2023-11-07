import Profile from "../model/profileSchema.js";

export const createController = async (req, res) => {
  try {
    const {
      pCategory,
      topic,
      title,
      description,
      stipend,
      date,
      responsibility,
    } = req.body;
    const photos = req.files["photos"];
    const pdfs = req.files["pdfs"];

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

    // Validation and size checks
    if (
      !pCategory ||
      !topic ||
      !title ||
      !description ||
      !responsibility ||
      !date
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if ((photos && photos.size > 5000000) || (pdfs && pdfs.size > 10000000)) {
      return res.status(400).send({
        error:
          "Photo size should be less than 5MB and PDF size should be less than 10MB.",
      });
    }

    checkUser.cpProjects.push({
      ...req.body,
      photos: photos.map((photo) => {
        return { data: photo.buffer, mimetype: photo.mimetype };
      }),
      pdfs: pdfs.map((pdf) => {
        return { data: pdf.buffer, mimetype: pdf.mimetype };
      }),
    });

    await checkUser.save();
    res.json({
      message: "Project added to the user profile in Cotnact People Section",
    });
  } catch (error) {
    console.log(error);
    // Handle any errors that occur during the process and send an error response.
    res.status(501).send({
      success: false,
      message: "Error in createController!!!",
      error,
    });
  }
};

// Controller to fetch a single project's details
export const getSingleProject = async (req, res) => {
  try {
    const { projectId } = req.params; // Extract project ID from URL parameters
    const user = req.user;

    // Find the user's profile by their identifier (you need to implement this logic)
    const checkUser = await Profile.findById(user.userId);

    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find the project with the given ID
    const project = checkUser.cpProjects.id(projectId); // Assuming "cpProjects" is the field for these projects

    if (!project) {
      return res.status(404).json({ error: "cpProject not found" });
    }

    res.json(project); // Send the project details as a JSON response
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error fetching cpProject details",
      details: error.message,
    });
  }
};

//Download project photos Controller it return buffer data and mimetype so please handle buffer data on client side
export const getPhotosData = async (req, res) => {
  try {
    // Get the project ID from the URL parameters
    const { projectId } = req.params;
    // Find the user's profile
    const user = req.user;
    const checkUser = await Profile.findById(user.userId);
    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find the project within the user's projects
    const project = checkUser.cpProjects.id(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Assuming that the photos property is an array of objects with 'data' and 'contentType' fields
    const photos = project.photos;

    if (photos.length === 0) {
      return res
        .status(404)
        .json({ error: "No photos & pfds found for this project" });
    }

    // storing the photo as an array of objects with 'data' and 'contentType'
    // Send the first photo in the array (you can modify this to send a specific photo)
    const photo = photos[0];

    // Set the response headers to specify the image content type
    res.setHeader("Content-Type", photo.mimetype);

    // Create an array of photo data
    const photoDataArray = photos.map((photo) => photo.data);

    // Send all photos as the response
    res.send(photoDataArray);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error fetching photo", details: error.message });
  }
};

// Download PDF controller
export const downloadPDF = async (req, res) => {
  try {
    // Get the project ID from the URL parameters
    const { projectId } = req.params;

    // Find the user's profile
    const user = req.user;
    const checkUser = await Profile.findById(user.userId);
    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find the project within the user's projects
    const project = checkUser.cpProjects.id(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Assuming that the pdfs property is an array of objects with 'data' and 'contentType' fields
    const pdfs = project.pdfs;

    if (pdfs.length === 0) {
      return res.status(404).json({ error: "No PDFs found for this project" });
    }

    // Assuming you are storing the PDF as an array of objects with 'data' and 'contentType'
    // Send the first PDF in the array (you can modify this to send a specific PDF)
    const pdf = pdfs[0];

    // Set the response headers to specify the PDF content type
    res.setHeader("Content-Type", pdf.mimetype);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${project.title}.pdf"`
    );

    // Send the binary data as the response
    res.send(pdf.data);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error downloading PDF", details: error.message });
  }
};

// Delete a specific project for the user
export const deleteProject = async (req, res) => {
  try {
    const { projectId } = req.params; // Extract project ID from URL parameters

    const user = req.user;
    const checkUser = await Profile.findById(user.userId);

    if (!checkUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Use the `pull` method to remove the project with the given ID
    checkUser.cpProjects.pull(projectId);

    await checkUser.save();
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error deleting project", details: error.message });
  }
};
