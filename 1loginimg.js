var exp=require('express');

var app=exp();

//built in middleware
app.use(exp.static('images'));

app.listen(9000,function(){
console.log("Express aplication started at server 9000");
});

app.get('/login',function(req,res){
       res.sendFile( __dirname +"/login.html");
	
});

app.get('/login',function(req,res){
	res.send("<img src='pic.jpeg'/>");
});

app.all('*',function(req,res){
	res.send("Invalid URL...");
});

