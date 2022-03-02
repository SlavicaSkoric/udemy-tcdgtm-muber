const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  // whenever you get an http request with a method of get to this route, run this callback
  // the callback has two arguments, incoming request & outgoing response (objects containing details about them)
  // url - route to which the req has been made
  // watch for incoming requests of method GET to the route http://localhost:3050/api
  // route handler
  app.get('/api', DriversController.greeting);
  // send sth to whomever made the req
  // app.post('/api');
  // app.put('/api');
  // app.delete('/api');
  // we are not invoking the function (greeting), we are just passing a reference to the function so that it can be invoked at some future time

  app.post('/api/drivers', DriversController.create);

  app.put('/api/drivers/:id', DriversController.edit);

  app.delete('/api/drivers/:id', DriversController.delete);
};
