var express = require('express');
var connection  = require('express-myconnection'); 
var http = require('http');
var mysql = require('mysql');
var path = require('path');

//load route
var route = require('./route'); 
var app = express();
app.set('views', path.join(__dirname, 'viewstable'));
app.set('view engine', 'ejs');

app.use(
    
    connection(mysql,{
        
        host: '127.0.0.1',
        user: 'root',
        password : '',
        port : 3306,
        database:'bekup'
    },'request')
);

app.get('/', route.list);
app.get('/delete', route.remove);
app.get('/edit', route.edit);
app.get('/saveedit', route.saveedit);
app.get('/add', route.add);
app.get('/saveadd', route.saveadd);

http.createServer(app).listen(8080, function() {
	console.log("server is running on port 8080...");
});
