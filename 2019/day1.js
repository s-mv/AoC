const fs = require('fs');

console.log("Day 1");

fs.readFile('./input.day1.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Oops, there's an error reading the input file:\n", err);
    return;
  }
  let arr = data.split('\n');
  let total = 0;
  let total2 = 0;
  let i = 0;
  // for(i in arr) {
    let p = ~~arr[i];
    if(p == 0) {
      // continue;
    }
    total += Math.floor(p / 3) - 2;
    while (p >= 0) {
      total2 += p;
      console.log(p)
      console.log(' ', total2)
      p = Math.floor(p / 3) - 2;
    }
  // }
  console.log('total fuel needed:', total);
  console.log('total fuel needed for fuel:', total2);
});