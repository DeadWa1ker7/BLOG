var index = require('./index');
var list = require('./list');
var article = require('./article');
var login = require('./login');
var conf = require('./conf');
var write = require('./write');

function render(){
     var templates = {
		 'index': index,
		 'list': list,
		 'article': article,
		 'login': login,
		 'conf': conf,
		 'write': write
	 }
	 return templates;
}

exports.render = render;
