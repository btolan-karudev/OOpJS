
function Stopwatch() {
    let startTime, endTime, running, duration = 0;


    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        },
        set: function (value) {
            return duration = value;
        }
    })
    Object.defineProperty(this, 'running', {
        get: function () {
            return running;
        }
    })
    Object.defineProperty(this, 'endTime', {
        get: function () {
            return endTime;
        }
    })
    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime;
        }
    })

}


Object.prototype.start = function () {
    if (this.running) 
        throw new Error('Stopwatch is already started');

        this.running = true;
   
        this.startTime = new Date();

    console.log(this.duration);
};

Object.prototype.stop = function () {
    if (!this.running) 
        throw new Error('Stopwatch is not started');

    this.running = false;
   
    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
};

Object.prototype.reset = function() {
    this.startTime=null;
    this.endTime=null;
    this.running=false;
    this.duration = 0;
};
console.log('eed fs fs f se');
const sw = new Stopwatch();



