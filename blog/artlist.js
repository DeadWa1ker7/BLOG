var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;
var conf = {
    adr: '127.0.0.1', // 这个是mongodb的服务器地址
    port: '27017', // 这个是我们链接服务器的端口号
    auto: {auto_reconnect: true}, // 自动重连
    db: 'artlist'
};

// 数据库的地址  数据库的端口号  是否自动重连（true、false）
var server = new Server(conf.adr, conf.port, conf.auto);
// 连接服务器的数据库  要连接的数据库名  要连接的数据库地址
var db = new Db(conf.db ,server);

function find(colname,fun,page){
    var len;
    var datas;
    var step =0;
    db.open(function(err){
        if(!err){
            db.collection(colname, function(err, col){
                if(!err){
                    col.find().toArray(function(arr, data){
                        if(!err){
                            len = data.length; // 总个数
                            step++;
                            if(step == 2){
                                fun(datas, len);
                            }
                        }
                    });
                    col.find().limit(5).skip(page).sort({'artYearM':-1,'artDay':-1}).toArray(function(err, data){
                        if(!err){
                            datas =data;
                            if(data.length>0){
                                step++;
                                if(step==2){
                                    fun(datas,len)
                                }
                            }else{
                                fun('err');
                            }
                        }
                        else{
                            fun('err');
                        }
                        db.close();
                    });
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
function findart(colName, fun, query){ //封装了一个查询方法
    db.open(function(err){
        if(!err){
            db.collection(colName, function(err, col){
                 if(!err){                    
                    // toArray 以数组的形式抛出
                    col.find(query).toArray(function(err, data){
                        if(!err){
                            // 都是返回OK
                            // 会给我们返回 一个空的数组
                            datas =data;
                            if(data.length > 0){
                                fun(datas);
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

function del (colname,fun,query){
    db.open(function(err){
        if(!err){
            db.collection(colname, function(err, col){
                if(!err){
                    col.deleteOne(query,function(err, data){
                        fun('ok');
                        db.close();
                    });
                }
            })
        }
    })
}
exports.del = del;
exports.findart = findart;

exports.insert = insert;
exports.find = find;