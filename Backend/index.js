var express = require('express');
var mysql = require('mysql');
//var tempCont = express();
var http = require( "http" );
var config   = require( "./config.js" );
var app = express();

//app.get('/signup/:fname/:lname/:email/:pswd/:cpswd', myRoutes.signup);

var connection = mysql.createConnection({
	//connectionLimit: 50,
	host: 'localhost',
	user: 'root',
	password: 'samurai',
	database:'movie'
});

connection.connect(function(error){
	if(!!error){
		console.log('Error');
	}
	else{
		console.log('Connected');
	}
});

app.use( express.static( __dirname  + '/../Login' ) );
//http://localhost:8000/login/maggie/maggie
app.get('/login/:username/:password',function(req, resp){
	console.log(req.params);
	var user = {};
	user.FirstName = req.params.username;
	user.Password = req.params.password;
	var query = "SELECT * from personalinfo where FirstName = '"+user.FirstName+"' && Password = '"+user.Password+"'";
	console.log(query);
	connection.query(query, function(error,rows,fields){
		if(error){
			console.log('Error in the query');
		}
		else{
			console.log('Success!');
			console.log(rows);
			if(rows.length>0)
			{
				resp.send(rows);
			}
			//console.log(fields);
		}
	});
})

app.get('/signup/:fname/:lname/:email/:pswd/:cpswd', function(req, resp) {
	var userInfo = {};
	userInfo.FirstName = req.params.fname;
    userInfo.LastName = req.params.lname;
    userInfo.Email = req.params.email;
    userInfo.Password = req.params.pswd;
    //var i=0;
    console.log("INSERT INTO personalinfo (FirstName,LastName,Email,Password) values ("+userInfo.FirstName+","+userInfo.LastName+","+userInfo.Email+","+userInfo.Password+")");
	connection.query("INSERT INTO personalinfo (FirstName,LastName,Email,Password) values ('"+userInfo.FirstName+"','"+userInfo.LastName+"','"+userInfo.Email+"','"+userInfo.Password+"')",function(error,rows,fields){
		if(error){
			console.log('Error in the query');
		}
		else{
			console.log('Success!');
			console.log(rows);
			console.log(fields);
			// if(rows.insertID>0)
			// 	res.send(rows);
			// resp.send('Hello '+rows[0]);
			// resp.send
		}
	});
})

app.listen(8000);  