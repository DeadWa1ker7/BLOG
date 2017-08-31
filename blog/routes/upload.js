var express = require('express');
var router = express.Router();
var formidable = require('formidable'),
    util = require('util');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});

router.post('/', function(req, res){
	
    var form = new formidable.IncomingForm();
    //设置编辑
    form.encoding = 'utf-8';
    //设置文件存储路径
    form.uploadDir = "public/images/upload";
    //保留后缀
    form.keepExtensions = true;
    //设置单文件大小限制    
    form.maxFieldsSize = 2 * 1024 * 1024;
    //form.maxFields = 1000;  设置所以文件的大小总和
    form.parse(req);
	res.send('OK');
})

module.exports = router;
