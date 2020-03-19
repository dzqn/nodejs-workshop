const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on("Yazdir", () => {
    console.log("hellooooooooooooooo");
});

setInterval(() => {
    eventEmitter.emit("Yazdir")
}, 1000);