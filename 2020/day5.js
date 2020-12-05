const fs = require('fs');

console.log("Day 1");

fs.readFile('./input.day5.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Oops, there's an error reading the input file:\n", err);
    return;
  }
  let arr = data.split('\n');
  let highest = 0;
  let ranges = [];
  let IDs = [];
  for (const i in arr) {
    let p = arr[i];
    if (arr[i] == '') {
      continue;
    }
    let rangex = [0, 127]
    let rangey = [0, 7]
    for (let k = 0; k < p.length; k++) {
      switch (p[k]) {
        case 'F':
          rangex[1] = Math.floor((rangex[0] + rangex[1]) / 2);
          break;
        case 'B':
          rangex[0] = Math.ceil((rangex[0] + rangex[1]) / 2);
          break;
        case 'L':
          rangey[1] = Math.floor((rangey[0] + rangey[1]) / 2);
          break;
        case 'R':
          rangey[0] = Math.ceil((rangey[0] + rangey[1]) / 2);
          break;
        default:
          break;
      }
    }
    ranges.push({ x: rangex[0], y: rangey[0]});
    IDs.push(rangex[0] * 8 + rangey[0]);
    if (rangex[0] * 8 + rangey[0] > highest) {
      highest = rangex[0] * 8 + rangey[0]
    }
  }
  let myseat = 0;
  for (const i in IDs) {
    for (const j in IDs) {
      if (Math.abs(IDs[i] - IDs[j]) == 2
      ) {
        let ID = (IDs[i] + IDs[j]) / 2;
        rx = Math.floor(ID / 8);
        ry = Math.floor(ID / rx - 8) % 8;
        console.log(rx, ry, ID);
      }
    }
  }

  console.log(highest);
});