const fs = require('fs');

console.log("Day 2");

fs.readFile('./input.day2.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Oops, there's an error reading the input file:\n", err);
    return;
  }
  let arr = data.split(/[-\n: ]/gi);
  // most ineffecient code lol
  let count = 0;
  let count2 = 0;
  for (let i = 0; i < arr.length - 5; i += 5) {
    let l1 = ~~arr[i], l2 = ~~arr[i + 1];
    let n = arr[i + 4].split(arr[i + 2]).length - 1;
    if (n >= l1 && n <= l2) {
      count++;
    }
    if ((arr[i + 4][l1 - 1] == arr[i + 2] || arr[i + 4][l2 - 1] == arr[i + 2]) && arr[i + 4][l1 - 1] != arr[i + 4][l2 - 1]) {
      count2++;
    }
  }
  console.log(count, 'valid passwords out of', Math.floor(arr.length / 5), 'total according to old policy.');
  console.log(count2, 'valid passwords out of', Math.floor(arr.length / 5), 'total according to new policy.');
});

