var express = require('express');
var router = express.Router();
// var conn = require('../model/conn').conn;
var write = require('../artlist');
var insert = write.insert;
router.get('/', function(req, res, next) {
  res.render('write', { title: 'Express' });
});
router.post('/', function(req, res, next) {
	insert('user', function(data){
		 res.send(data);
	}, {'artTit': req.body.artTit, 'artDes': req.body.artDes,'artAuthor':req.body.artAuthor,
	'artDate':req.body.artDate,'artCount':req.body.artCount,'artCon':req.body.artCon}); 
  });
// var deal = {
// 	funs: {
// 		name: 'insert',
// 		query: {}
// 	},
// 	colName: 'article',	
// }

// router.post('/', function(req, res){
// 	deal.query = req.body;
// 	conn(deal, function(data){
// 		if(data){
// 			res.send('OK');
// 		}
// 	})
// })

module.exports = router;
