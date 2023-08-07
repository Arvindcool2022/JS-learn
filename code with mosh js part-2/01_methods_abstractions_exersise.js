/* 
1. Create a new object using Stopwatch contructor function.
2. They should be four properties for it(duration, start(), stop(), reset()).
3. initially duration is 0
4. start() if pressed twice throws an error.
5. stop() if pressed twice throws an error.
6. after invoking start() then stop() time between them is calculated and added to duration.
7. if did again the run time added on top of previous duration value. 
8. reset sets duration back to 0.

*/

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = () => {
    if (!running) {
      startTime = new Date();
      running = true;
    } else console.error('Stopwatch is already started');
  };

  this.stop = () => {
    if (running) {
      endTime = new Date();
      duration += endTime - startTime;
      running = false;
    } else console.error('Stopwatch is already stopped');
  };

  this.reset = () => {
    startTime, endTime, running, (duration = 0);
  };
  Object.defineProperty(this, 'duration', {
    get: () => duration / 1000,
  });
}
