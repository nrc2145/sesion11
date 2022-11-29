const EventEmitter = require("events");

eventEmitter = new EventEmitter();

eventEmitter.on("start", (number) => {
  console.log(`Forma en la que Angelo maneja el evento start ${number}`);
});

eventEmitter.on("start", (number) => {
  console.log(`Forma en la que Claudia maneja el evento start ${number}`);
});

eventEmitter.on("musicOn", (start, end) => {
  console.log(`music started from ${start} to ${end}`);
});

eventEmitter.on("foodReady", () => {
  console.log(`Angelo me fue a comer `);
});

eventEmitter.emit("start", 23);
eventEmitter.emit("musicOn", 15, 23);

eventEmitter.emit("foodReady", 22, 23);
