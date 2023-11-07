import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  collegeName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  resume: {
    data: Buffer,
    filename: String,
    mimetype: String,
  },
  projects: [
    {
      pname: {
        type: String,
        required: true,
      },
      topic: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      photos: [
        {
          data: Buffer,
          mimetype: String,
        },
      ],
      pdfs: [
        {
          data: Buffer,
          mimetype: String,
        },
      ],
    },
  ],
  activeProjects: [
    {
      title: String,
      pdf: {
        data: Buffer,
        mimetype: String,
      },
    },
  ],
  cpProjects: [
    {
      pCategory: {
        type: String,
        required: true,
      },
      topic: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      stipend: {
        type: String,
        // required: true,
      },
      date: {
        type: String,
        required: true,
      },
      responsibility: {
        type: String,
        required: true,
      },
      photos: [
        {
          data: Buffer,
          mimetype: String,
        },
      ],
      pdfs: [
        {
          data: Buffer,
          mimetype: String,
        },
      ],
    },
  ],
  papers: [
    {
      title: String,
      pdf: {
        data: Buffer,
        mimetype: String,
      },
    },
  ],
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
