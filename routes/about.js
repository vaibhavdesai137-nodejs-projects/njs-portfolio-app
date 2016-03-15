var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    var model = {
        title: "About",
        activeNav: "about"
    };

    res.render('about', model);
});

module.exports = router;