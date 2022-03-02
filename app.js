const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

// app - an object that is going to take incoming HTTP requests and depending upon some information in that request (like the type, method) and the route that it's trying to go to (eg /api/drivers), it's going to run some different amount of code inside of our application - that's what the purpose of express server - application is

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/muber');
}

// any incoming request, assume it's json, parse it into an object so that we can work with it
app.use(bodyParser.json());
routes(app);

module.exports = app;
