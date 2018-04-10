
'use strict';

var mongodb = require("mongodb");

var mongo_client = mongodb.MongoClient;
var url = "mongodb://localhost:27017";
var dbname = "admin";

function mogon_close(client, error, result){
	if(error) {
		console.log('Error:'+ error);
	}
	else {
		console.log(result);
	}
	client.close();
}

function mongo_insert(table, data){
	mongo_client.connect(url, function(err, client){
		console.log('连接成功!');
		client.db(dbname).collection(table).insert(data, function(err, result){
			mogon_close(client, err, result);
		});
	});
}

function mongo_delete(table, key){
	mongo_client.connect(url, function(err, db){
		console.log('连接成功!');
		client.db(dbname).collection(table).remove(key, function(err, result){
			mogon_close(db, err, result);
		});
	});
}

function mongo_update(table, key, data){
	mongo_client.connect(url, function(err, db){
		console.log('连接成功!');
		client.db(dbname).collection(table).update(key, data, function(err, result){
			mogon_close(db, err, result);
		});
	});
}

function mongo_find(table, key, callback){
	mongo_client.connect(url, function(err, client){
		console.log('连接成功!');
		client.db(dbname).collection(table).find(key).toArray(function(err, cols){
			if(!err){
				console.log('查询数据集合成功'+ JSON.stringify(cols));
				callback(cols);
			}
			else {
				console.log('查询数据集合失败');
			}
			client.close();
		});
	});
}

exports.insert = mongo_insert;
exports.delete = mongo_delete;
exports.update = mongo_update;
exports.find = mongo_find;