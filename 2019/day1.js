const fs = require('fs');

console.log("Day 1");

fs.readFile('./input.day1.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Oops, there's an error reading the input file:\n", err);
    return;
  }
  let arr = data.split('\n');
  // let arr = [14, 1969, 100756];
  let total = 0;
  let total2 = 0;
  for (let i = 0; i < arr.length; i++) {
    let p = ~~arr[i];
    if (p == 0) {
      continue;
    }
    total += Math.floor(p / 3) - 2;
    let n = 0;
    while (p >= 0) {
      p = Math.floor(p / 3) - 2;
      if (p <= 0) break;
      n += p;
      total2 += p;
    }
  }
  console.log('total fuel needed:', total);
  console.log('total fuel needed for fuel:', total2);
});

/* 4973465
 */