var events = require('events');
var http=require('http');
var ee = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('This is an event!');
  http.createServer(function (req, res) {
    res.write("This is an event!");
    res.end();
  }).listen(8080);
}

//Assign the event handler to an event:
ee.on('Hello event', myEventHandler);

//Fire the 'scream' event:
ee.emit('Hello event');