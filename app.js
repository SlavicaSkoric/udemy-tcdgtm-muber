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

// we can use app.use to register any type of middleware with express
app.use((err, req, res, next) => {
  // console.log(err);
  res.status(422).send({ error: err.message });
});
// err object - will be populated-defined if the previous middleware threw an error (by that error)
// req - incoming request object
// res - outgoing response object
// next - function; you can call next to forcibly go to the next middleware in the chain; you have to call next to go to the next middleware, it will not be called automatically on itself in express middleware for you

module.exports = app;
