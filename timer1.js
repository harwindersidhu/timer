//Implement an alarm clock / timer which will beep after a specified amount of time has passed.
//The user can specify an unlimited number of alarms using command line arguments
const args = process.argv;
console.log(args);

const timers = args.slice(2);

for (let timer of timers) {
  if (typeof Number(timer) === 'number' && Number(timer) > 0) {
    setTimeout(() => {
      console.log(`Timer ran that was scheduled after ${timer} seconds.`);
      process.stdout.write('\x07');
    }, Number(timer) * 1000);
  }
}