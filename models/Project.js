var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    title: String,
    category: String,
    desc: String,
    cover: String
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