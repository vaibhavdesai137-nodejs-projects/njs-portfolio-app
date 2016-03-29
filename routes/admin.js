'use strict';

var express = require('express');
var router = express.Router();
var Project = require('./../models/Project');

var availableProjectCovers = [
    "cabin.png",
    "cake.png",
    "circus.png",
    "game.png",
    "safe.png",
    "submarine.png"
];

// dashboard
router.get('/', function (req, res) {
    res.render('admin/index');
});

// all projects
router.get('/projects', function (req, res) {

    Project.find({}, function (err, projects) {

        if (err) throw err;

        var model = {
            projects: projects,
            title: "Manage Projects",
            activeNav: "projects"
        };

        res.render('admin/projects/index', model);
    });
});

// show add project page
router.get('/projects/add', function (req, res) {

    Category.find({}, function (err, categories) {
        res.render('admin/projects/add', {
            categories: categories,
            title: "Add Project",
            activeNav: "projects"
        });
    });

});

// add new project
router.post('/projects', function (req, res) {

    var projectTitle = req.body.projectTitle && req.body.projectTitle.trim();
    var projectCategory = req.body.projectCategory && req.body.projectCategory.trim();
    var projectDesc = req.body.projectDesc && req.body.projectDesc.trim();
    var projectCover = req.body.projectCover && req.body.projectCover.trim();

    if (availableProjectCovers.indexOf(projectCover) < 0) {
        projectCover = "cake.png";
    }

    var newProject = new Project({
        title: projectTitle,
        category: projectCategory,
        desc: projectDesc,
        cover: projectCover
    });

    newProject.save(function (err) {

        if (err) throw err;

        req.flash('success', 'Project successfully added');
        res.location('/admin/projects');
        res.redirect('/admin/projects');

    });
});

// show edit project page
router.get('/projects/edit/:id', function (req, res) {
    var id = req.params.id;
    Project.findOne({
        _id: id
    }, function (err, project) {

        if (err) throw err;

        Category.find({}, function (err, categories) {
            var model = {
                project: project,
                categories: categories,
                title: "Edit Project",
                activeNav: "projects"
            };

            res.render('admin/projects/edit', model);
        });

    });

});

// edit project
router.post('/projects/edit/:id', function (req, res) {

    var id = req.params.id;
    var projectTitle = req.body.projectTitle && req.body.projectTitle.trim();
    var projectCategory = req.body.projectCategory && req.body.projectCategory.trim();
    var projectDesc = req.body.projectDesc && req.body.projectDesc.trim();
    var projectCover = req.body.projectCover && req.body.projectCover.trim();

    if (availableProjectCovers.indexOf(projectCover) < 0) {
        projectCover = "cake.png";
    }

    Project.update({
        _id: id
    }, {
        title: projectTitle,
        category: projectCategory,
        desc: projectDesc,
        cover: projectCover
    }, function (err) {

        if (err) throw err;

        req.flash('success', 'Project successfully saved');
        res.location('/admin/projects');
        res.redirect('/admin/projects');

    });

});

// delete project
router.delete('/projects/delete/:id', function (req, res) {

    var id = req.params.id;

    Project.remove({
        _id: id
    }, function (err) {

        if (err) throw err;

        req.flash('success', 'Project successfully deleted');
        res.writeHead(200);
        res.end();

    });

});

module.exports = router;