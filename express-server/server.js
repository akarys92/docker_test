const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//Api routes
const api = require('./routes/api');

const app = express();

//Parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Cross Origin middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

//set api routes
app.use('/', api);

// Get port from and environment and store
const port = process.env.PORT || '3000';
app.set('port', port);

//create http server
const server = http.createServer(app);

//Listen to port 
server.listen(port, () => console.log('API running at localhost:${port}'));