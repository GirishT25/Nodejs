const Eventemitter = require('events');

const first_event  = new Eventemitter();

first_event.on("greet" , (name)=>{
    console.log(`Hello ${name}`);
});

first_event.emit("greet" , "Girish")