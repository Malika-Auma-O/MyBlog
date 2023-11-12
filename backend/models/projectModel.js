const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema( {
    title: {type:String, required:true},
    content: { type: String, required: true },
    category: { type: String, required: false },
    technologies: { type: String, required: false },
    image: { type: String, required: false },
    imagePublicId: { type: String, required: false },
    userId: {type: String},
}, {timestamps: true});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;