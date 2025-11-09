const Eventemitter = require('events');


class CustomEventEmitter extends Eventemitter{
    constructor(){
        super();
        this.greeting = "Hello";
    }

    greet(name){
        this.emit('greeting' , `${this.greeting} , ${name}`);
    }
}

const mycustomEmitter =  new CustomEventEmitter()

mycustomEmitter.on('greeting' , (input)=>{
    console.log(`Greeting Event` , input);
})

mycustomEmitter.greet("Girish");

