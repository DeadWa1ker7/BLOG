var express = require('express');
var router = express.Router();
var findart = require('../artlist').findart;
/* GET users listing. */
router.get('/', function(req, res, next) {
	var val = req.query.time.toString();
	findart('user', function(datas){
		res.render('list', {'time': datas});
		console.log(datas)
	}, {'artYearM':val});      
});


module.exports = router;
