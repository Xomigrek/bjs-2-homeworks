class AlarmClock {
    constructor (){
        this.alarmCollection = [];
        this.timerId = null;
    };
    addClock (time, callback, id){
        if (id === undefined) {
            throw new Error('id не передан');
        } if (this.alarmCollection.some(element => element.id === id)) {
           return console.error("Будильник с id ", id, "существует");
        } else {
            this.alarmCollection.push ({time, callback, id})
        };
    };
    removeClock (id){
        this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
    };
    getCurrentFormattedTime (){
        return new Date().toLocaleString().slice(12,-3);
    };
    start (){
        let checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()){
                return alarm.callback();
            }
        }
            if (this.timerId === null) {
                this.timerId = setInterval(() => {
                    this.alarmCollection.forEach((alarm) => checkClock(alarm));
                });
            }
    };
    stop (){
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms (){
        this.alarmCollection.forEach((element) => console.log(element.id, element.timer));
    };
    clearAlarms (){
        this.stop();
        this.alarmCollection = [];
    };
}

function testCase () {
    let alarm = new AlarmClock;
    alarm.addClock (new Date().toLocaleString().slice(12,-3), () => {let id = setInterval(()=>console.log("Пора вставать!") , 1000); setTimeout(() =>clearInterval(id), 5000)}, 1);
    alarm.addClock (new Date(Date.now()+60000).toLocaleString().slice(12,-3), () => {console.log("Пора вставать!!!!!!")}, 2);
    alarm.removeClock(2);
    alarm.addClock (new Date(Date.now()+120000).toLocaleString().slice(12,-3), () => {console.log("Проснись же!!!!!!")}, 3);
    alarm.printAlarms();
    alarm.start();
    alarm.stop();
    alarm.clearAlarms();
}