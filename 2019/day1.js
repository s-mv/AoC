const fs = require('fs');

console.log("Day 2");

fs.readFile('./input.day2.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Oops, there's an error reading the input file:\n", err);
    return;
  }
  let arr = data.split('\n');
  let total = 0;
  for(i in arr) {
    if(~~arr[i] == 0) {
      continue;
    }
    total += Math.floor(~~arr[i] / 3) - 2;
    console.log(~~arr[i], Math.floor(~~arr[i] / 3) - 2)
  }
  console.log('total needed', total);
});