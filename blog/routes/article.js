var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var title = JSON.parse(req.query.title);
	console.log(title)
    res.render('article', { title: 'Express' });
});

module.exports = router;
