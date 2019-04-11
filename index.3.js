
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running) 
            throw new Error('Stopwatch is already started');

        running = true;
       
        startTime = new Date();

        console.log(this.duration);
    };

    this.stop = function () {
        if (!running) 
            throw new Error('Stopwatch is not started');

        running = false;
       
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime, endTime, running, duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })

}
const sw = new Stopwatch();

sw.start();
