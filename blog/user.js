var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;
var conf = {
    adr: '127.0.0.1', // 这个是mongodb的服务器地址
    port: '27017', // 这个是我们链接服务器的端口号
    auto: {auto_reconnect: true}, // 自动重连
    db: 'inf'
};

// 数据库的地址  数据库的端口号  是否自动重连（true、false）
var server = new Server(conf.adr, conf.port, conf.auto);
// 连接服务器的数据库  要连接的数据库名  要连接的数据库地址
var db = new Db(conf.db ,server);

function find(colName, fun, query){ //封装了一个查询方法
    db.open(function(err){
        if(!err){
            db.collection(colName, function(err, col){
                 if(!err){                    
                    // toArray 以数组的形式抛出
                    col.find(query).toArray(function(err, data){
                        if(!err){
                            // 都是返回OK
                            // 会给我们返回 一个空的数组
                            if(data.length > 0){
                                fun('ok');
                            } else {
                                fun('err');
                            }    
                        } else {
                            fun('err');
                        }
                         db.close(); // 关闭数据库
                    })  
                 }
            })
        }
    })
}
function insert(colName, fun, query){ //封装了一个查询方法
    db.open(function(err){
        if(!err){
            db.collection(colName, function(err, col){
                 if(!err){                    
                    // toArray 以数组的形式抛出
                    col.insert(query,function(err, data){
                        if(!err){
                            // 都是返回OK
                            // 会给我们返回 一个空的数组
                            if(data.length == 0){
                                fun('err');
                            } else {
                                fun('ok');
                            }    
                        } else {
                            fun('err');
                        }
                         db.close(); // 关闭数据库
                    })  
                 }
            })
        }
    })
}
exports.insert = insert;
exports.find = find;