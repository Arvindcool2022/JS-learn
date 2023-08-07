function Stopwatch() {
    let startTime, endTime, running, duration = 0

    Object.defineProperty(this, 'duration', {
        get: function () {
            return (duration / 1000);
        },
        set: function (v) {
            duration = v;
        }
    });

    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime;
        }
    });

    Object.defineProperty(this, 'endTime', {
        get: function () {
            return endTime;
        }
    });

    Object.defineProperty(this, 'running', {
        get: function () {
            return running;
        },
        set: function (v) {
            running = v;
        }
    });
}
Stopwatch.prototype.start = function() {
    if (!this.running){
        this.startTime = new Date();
        console.log(this.duration, this.startTime)
        this.running = true;
    } else {
        console.error('Stopwatch is already started');
    }
};

Stopwatch.prototype.stop = function() {
    if (this.running){
        this.endTime = new Date();
        this.duration += this.endTime - this.startTime;
        console.log(this.endTime,this.startTime,this.duration)
        this.running = false;
    } else {
        console.error('Stopwatch is already stopped');
    }
};

Stopwatch.prototype.reset = function() {
    this.startTime = 0;
    this.endTime = 0;
    this.running = false;
    this.duration = 0;
}

// needs fixing duration result nan
// start and stop are not updating starttime endtime or running.
