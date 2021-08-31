//Using thew EventEmitter class we are able to raise and listen to events
const EventEmitter = require("events");

const emitter = new EventEmitter();

// A listener is a function that will be called when that event is raised. *on/addlistener are both the same
emitter.on("message Logged", function () {
  console.log("LISTENER CALLED");
});

//This function is used to raise an event
emitter.emit("message Logged");
