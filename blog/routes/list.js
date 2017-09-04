var express = require('express');
var router = express.Router();
var findart = require('../artlist').findart;
/* GET users listing. */
router.get('/', function(req, res, next) {
  findart('user', function(datas){
    res.render('list', {list: datas});
},req.query.search);    

});

module.exports = router;
