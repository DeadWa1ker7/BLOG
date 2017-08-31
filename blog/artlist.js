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
                    col.find().limit(5).skip(page).toArray(function(err, data){
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
exports.find = find;