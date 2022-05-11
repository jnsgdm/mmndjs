const events = require('events');
const fs = require('fs');
const path = require('path');

class Logger{
    constructor(){
    }

    logger(msg){
        const theEvent = new events();
        theEvent.on('log',(msg)=>{
            fs.appendFile(path.join(__dirname,'logger.txt'),msg,(err)=>{
                if(err) throw err;
            });
        });   
        theEvent.emit('log',msg);
    }
}

module.exports = Logger;