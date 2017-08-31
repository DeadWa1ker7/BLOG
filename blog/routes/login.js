
var express = require('express');
var router = express.Router();
var conn = require('../user');
var find = conn.find;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: '登录'});
});

router.post('/', function(req, res, next) {
    find('user', function(data){
         res.send(data);
    }, {'uName': req.body.uName, 'uPwd': req.body.uPwd}); 
});

module.exports = router;
