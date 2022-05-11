const os = require('os');
const {freemem,totalmem} = os;
const Logger = require('./Logger');

class MemoryManager{
    constructor(){
        this.totalMemory = totalmem;
        this.freeMemory = freemem;
    }

    status(){
        setInterval(()=>{
            const time = new Date();
            const lg = new Logger();

            const status = {
                totalMemory: `${parseInt(this.totalMemory/1024/1024)} MB`,
                freeMemory: `${parseInt(this.freeMemory/1024/1024)} MB`,
                percentUsage: `${parseInt((this.freeMemory/this.totalMemory)*100)} %`,
                date: `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
            }

            console.clear();
            console.log('-=-=-= memory status -=-=-=');
            console.table(status)
            lg.logger(`${JSON.stringify(status)}\n`)

        },1000);
    }
}

module.exports = MemoryManager;