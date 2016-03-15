var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    
    var model = {
        title: "Contact",
        activeNav: "contact"
    };

    res.render('contact', model);
});

module.exports = router;