
var nport = 80;

var express = require("express");
var ejs = require("ejs");
var mongodb = require("./zmongodb.js");

var app = express();

app.use(express.static('webapp'));
app.set('view engine', 'ejs');

var items = [
	{"name":"Benu","age":38,"sex":"man"},
	{"name":"Mingkai","age":38,"sex":"man"},
	{"name":"Zhiyong","age":38,"sex":"man"},
	{"name":"Hailong","age":36,"sex":"man"},
	{"name":"Liuxin","age":37,"sex":"woman"},
];
//mongodb.insert("user", items);
// mongodb.find("user");

app.get('/', function(req,res){
	console.log("request1 for" + req.path);
});

app.get('/list/*', function(req,res){
	console.log("request for " + req.path);

	// var items = [{"name":"cd","age":18}, {"name":"lw","age":20}];
	mongodb.find("user", {"name":req.path.slice(6)}, function(cols) {
		res.render('listname', {title:'姓名', items:cols});
	});
});

app.get("/haha",function(req,res){
	res.send("这是haha页面，哈哈哈哈哈哈");
});

app.get(/^\/student\/([\d]{10})$/,function(req,res){
	res.send("学生信息，学号" + req.params[0]);
});

app.get("/teacher/:gonghao",function(req,res){
	res.send("老师信息，工号" + req.params.gonghao);
});

var server = app.listen(nport, function(){
	var host = server.address().address;
	var port = server.address().port;
 
	console.log("应用实例，访问地址为 http://%s:%s", host, port);
 
});