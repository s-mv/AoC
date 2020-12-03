const fs = require('fs');

console.log("Day 3");

fs.readFile('./input.day3.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Oops, there's an error reading the input file:\n", err);
    return;
  }
  let arr = data.split('\n');
  arr.splice(arr.length - 1);
  let w = arr[0].length;
  let h = arr.length;
  function getTrees(dx, dy) {
    let count = 0;
    let x = 0, y = 0; // co-ordinates
    while (y < h) {
      count += ~~(arr[y][x % w] == '#');
      x += dx;
      y += dy;
    }
    return count;
  }
  let res = getTrees(1, 1) * getTrees(3, 1) * getTrees(5, 1) * getTrees(7, 1) * getTrees(1, 2);
  console.log(res, 'is the product of trees encountered.')
});