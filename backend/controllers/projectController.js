const Project = require("../models/projectModel")
const { projectImageParser } = require("../middleware/uploadMiddleware");

const uploadProjectImage = projectImageParser.array("images");

const createProject = async (req, res) => {
  try {
    const userId = req.user.userId;

    // handle image upload
    uploadProjectImage(req, res, async (err) => {
      if (err) {
        return res.status(500).send({ msg: "Failed to upload project image", error: err });
      }

      // if new images are uploaded, save the Cloudinary image URLs and public IDs to the project
      const images = req.files ? req.files.map(file => file.path) : [];
      const imagePublicIds = req.files ? req.files.map(file => file.filename) : [];

      // create a new project
      let project = {
        userId: userId,
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        technologies: req.body.technologies,
        images: images,
        imagePublicIds: imagePublicIds,
        website: req.body.website,
      };

      const newProject = await Project.create(project);
      res.status(201).send({ msg: "Project created successfully", newProject });
    });
  } catch (error) {
    console.log("error creation", error);
    res.status(500).send({ msg: "Unable to create Project", error });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const project = await Project.find();
    res.send(project);
  } catch (error) {
    res.status(500).send({ error: "Unable to retrieve project" });
  }
}

const getAllUserProjects = async (req, res) => {
  try {
    const userId = req.user.userId
    // Find all projects based on their user ID
    const userProjects = await Project.find({ userId: req.user.userId })
    res.send(userProjects)
  } catch (error) {
    res.status(401).send({ msg:"Unauthorized access", error})
  }
}

const updateProject = async (req, res) => {
  try {
    // Set the user ID from the authentication token
    const userId = req.user.userId;

    // Check if the project exists
    const projectId = req.params.id;
    const existingProject = await Project.findById(projectId);

    if (!existingProject) {
      return res.status(404).send({ msg: "Project not found" });
    }

    // Check if the user is the owner of the Project
    if (existingProject.userId !== userId) {
      return res.status(403).send({ msg: "You are not authorized to update this Project" });
    }

    uploadProjectImage(req, res, async (err) => {
      if (err) {
        return res.status(500).send({ msg: "Failed to upload project image", error: err });
      }

      // Update the project details with the new data
      existingProject.title = req.body.title;
      existingProject.author = req.body.author;
      existingProject.content = req.body.content;
      existingProject.category = req.body.category;

      // if new images are uploaded, save the Cloudinary image URLs and public IDs to the project
      if (req.files) {
        existingProject.images = req.files.map(file => file.path);
        existingProject.imagePublicIds = req.files.map(file => file.filename);
      }

      // Save the updated project to the database
      await existingProject.save();

      res.send({ msg: "Project updated successfully", updatedProject: existingProject });
    });
  } catch (error) {
    console.log("error updating", error);
    res.status(500).send({ msg: "Unable to update Project", error });
  }
};

const deleteProject = async (req, res) => {
  try {

    const project = await Project.findById(req.params.id);
    if (project.userId !== req.user.userId) {
      return res.status(403).send({ msg: "Unauthorized to delete this project" });
    }else {
      await Project.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "Project deleted successfully" });
    }

  } catch (error) {
    res.status(500).send({ error: "Unable to delete project" });
  }
}

module.exports = {
    createProject,
    getAllProjects,
    getAllUserProjects,
    updateProject,
    deleteProject 
  };