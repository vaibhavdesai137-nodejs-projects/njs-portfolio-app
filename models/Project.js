var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    author: String,
    title: String,
    category: String,
    content: String,
    date: {
        type: Date,
        default: Date.now
    },
    imageName: String,
    comments: []
});

var Project = mongoose.model('projects', projectSchema);

Project.create = function (newProject, callback) {
    newProject.save(callback);
};

Project.getAll = function (callback) {
    Project.find({}, callback);
};

Project.getById = function (id, callback) {
    Project.findById(id, callback);
};

Project.getByCategory = function (category, callback) {
    Project.find({
        category: category
    }, callback);
};

module.exports = Project;