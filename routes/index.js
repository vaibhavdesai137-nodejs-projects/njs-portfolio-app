var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    
    var model = {
        title: "Home",
        activeNavbar: ""
    };
    
    res.render('index', model);
});

module.exports = router;