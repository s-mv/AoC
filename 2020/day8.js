const fs = require('fs');

console.log("Day 8");

fs.readFile('./input.day6.test.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Oops, there's an error reading the input file:\n", err);
    return;
  }
  let arr = data.split('\n');
  let acc = 0;
  let cycle = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '') { continue }
    let p = arr[i].split(/ /gi);
    // console.log(p);
    cycle += p;
    switch (p[0]) {
      case 'acc':
        acc += Number(p[1]);
        break;
      case 'jmp':
        i += Number(p[1]);
        break;
      case 'nop':
        // lol :P
        break;
      default:
        break;
    }
  }
  console.log(acc);
});