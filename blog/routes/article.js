var express = require('express');
var router = express.Router();
var findart = require('../artlist').findart;
/* GET users listing. */
router.get('/', function(req, res, next) {
	var val = req.query.title.toString();
	findart('user', function(datas){
		res.render('article', {'list': datas[0]});
		console.log(datas)
	},{'artTit':val});      
});

module.exports = router;
