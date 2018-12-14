var express = require("express");
var app = express();
var bodyparser = require("body-parser")
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/angularproject" )

var logSchema = new Schema({
	message 			: {type:String}
},{timestamp:true})
mongoose.model('Log',logSchema,'logs');
var LogModel = mongoose.model('Log');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

    app.use(allowCrossDomain);
    app.use(bodyparser())
    //some other code
 
app.listen(8080);

app.get("/fetch",function(req,res){
	LogModel.find({},function(err,data){
		console.log(data);
		res.send(data);
	})
})


app.post("/post",function(req,res){
	var a=5;
	console.log(req.body)
	new LogModel({
		"message":req.body.msg
	}).save(function(err){
		if(err)
			console.log(err);
		else
			console.log("saved")
	})

	res.json({"msg":"succesgfully logged"});
})