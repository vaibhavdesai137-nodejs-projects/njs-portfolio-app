var express = require('express');
var router = express.Router();
var Category = require('./../models/Category');
var Project = require('./../models/Project');

router.get('/', function (req, res, next) {

    Project.getAll(function (err, projects) {
        if (err) throw err;

        var model = {
            title: 'Portfolio',
            activeNav: "portfolio",
            projects: projects
        };

        res.render('portfolio', model);
    });

});

module.exports = router;