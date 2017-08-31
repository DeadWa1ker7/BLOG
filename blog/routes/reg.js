var express = require('express');
var router = express.Router();
var reg = require('../user');
var insert = reg.insert;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('reg', { title: '注册' });
});
router.post('/', function(req, res, next) {
  insert('user', function(data){
       res.send(data);
  }, {'uName': req.body.uName, 'uPwd': req.body.uPwd}); 
});

module.exports = router;