const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema( {
    title: {type:String, required:false},
    content: { type: String, required: false },
    category: { type: String, required: false },
    technologies: { type: String, required: false },
    images: [{ type: String, required: false }],
    imagePublicIds: [{ type: String, required: false }],
    userId: {type: String},
    website: { type: String, required: false },
    github: { type: String, required: false },
}, {timestamps: true});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;