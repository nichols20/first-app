//Using the EventEmitter class we are able to raise and listen to events
const { EventEmitter } = require("stream");

const url = "http://mylogger.com";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    // A listener is a function that will be called when that event is raised. *on/addlistener are both the same
    //the second arguement is the callback function of the listener. we can pass arguements from the emit function to the listener callback.
    this.on("message Logged", (arg) => {
      console.log("LISTENER CALLED", arg);
    });

    //This function is used to raise an event, the first arguement is event name and the second are the event arguements
    this.emit("message Logged", { id: 1, url: "http://" });
  }
}
module.exports = Logger;
