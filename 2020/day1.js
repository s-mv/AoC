const fs = require('fs');

console.log("Day 1");

fs.readFile('./input.day1.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Oops, there's an error reading the input file:\n", err);
    return;
  }
  let tasksDone = [false, false];
  let arr = data.split('\n');
  for (let i in arr) {
    if (~~arr[i] == 0) {
      arr.splice(i--);
      continue;
    }
    if (tasksDone[0] && tasksDone[1]) {
      return;
    }
    for (let j in arr) {
      if (!tasksDone[0] && ~~arr[i] + ~~arr[j] == 2020) {
        tasksDone[0] = true;
        console.log(' Numbers (2):', ~~arr[i], ~~arr[j],
          '\n',
          'Product:', ~~arr[i] * ~~arr[j]);
      }
      for (let k in arr) {
        if (!tasksDone[1] && ~~arr[i] + ~~arr[j] + ~~arr[k] == 2020) {
          tasksDone[1] = true;
          console.log(' Numbers (3):',
            ~~arr[i], ~~arr[j], ~~arr[k],
            '\n',
            'Product:', ~~arr[i] * ~~arr[j] * ~~arr[k]);
        }
      }
    }
  }
});