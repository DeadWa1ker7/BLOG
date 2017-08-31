// let mongo = require('mongodb');
// let Server = mongo.Server;
// let Db = mongo.Db;

// const conf = {
// 	adr: '127.0.0.1',
// 	port: '27017',
// 	auto: {auto_reconnect: true},
// 	db: 'artlist'
// };

// let server = new Server(conf.adr, conf.port, conf.auto);
// let db = new Db(conf.db, server);

// //var deal = {
// //	funs: {
// //		name: 'find',
// //		query: {}
// //	},
// //	colName: 'user',
// //}	

// //conn(deal);


// function conn(deal, fun){
// 	db.open(function(err){
// 		if(!err){
// 			db.collection(deal.colName, {safe: true}, function(err, col){
// 				if(!err){
//                     if(deal.funs instanceof Array){ // 多数据增删改查操作
// 						var allFuns = deal.funs.length;
// 						var dealLen = {};
// 						var count = 0;
// 						for(let i = 0; i < allFuns; i++){
// 							switchFun(col, deal.funs[i], function(data){
						
// 								dealLen[deal.funs[i].name] = data;
								
// 								count++;
// 								if(count == allFuns){
// 									fun(dealLen);
// 									db.close();
// 								}
// 							})							
// 						}
						
// 					} else {  // 单数据增删改查操作
// 						switchFun(col, deal.funs, function(data){
// 							fun(data)
// 							db.close();
// 						})
// 					}
// 				} else {
//                     console.log('col err:' + err);
// 				} 	
// 			})
// 		} else {
// 			console.log('db err: ' + err);
// 		}
		
// 	});	
	
// 	function switchFun(col, funs, fun){  // 增删改查方法拓展
// 		switch(funs.name){
// 			case 'find':
// 				col.find(funs.query).limit(funs.limit).skip(funs.skip).toArray(function(err, data){
// 					if(!err){
// 						fun(data);
// 					} else {
// 						console.log(err);
// 					}
// 				});
// 			break;	
// 			case 'count':
// 				col.count(function(err, data){
// 					fun(data);
// 				});
// 			break;	
// 			case 'insert':
// 				col.insert(funs.query, function(err, data){
// 				    console.log(data);
// 					fun(data);
// 				});
// 			break;	
// 	    }
// 	}
// }

// exports.conn = conn;

