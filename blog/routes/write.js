var express = require('express');
var router = express.Router();
var conn = require('../model/conn').conn;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('write', { title: 'Express' });
});

var deal = {
	funs: {
		name: 'insert',
		query: {}
	},
	colName: 'article',	
}

router.post('/', function(req, res){
	deal.query = req.body;
	conn(deal, function(data){
		if(data){
			res.send('OK');
		}
	})
})

module.exports = router;
