const fs = require('fs');

console.log("Day 9");

fs.readFile('./input.day9.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Oops, there's an error reading the input file:\n", err);
    return;
  }
  let arr = data.split(/\n/gi);
  let inv;
  for (let i = 25; i < arr.length; i++) {
    let h = 0;
    for (let j = i - 25; j < i; j++) {
      for (let k = i - 25; k < i; k++) {
        h += ~~(~~arr[j] + ~~arr[k] == ~~arr[i]);
      }
    }
    if (h == 0) {
      console.log(arr[i], h);
      inv = ~~arr[i];
      break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let c = ~~arr[i];
    let p = [~~arr[i]];
    for(let j = i + 1; j < arr.length; j++) {
      c += ~~arr[j];
      p.push(~~arr[j]);
      if(c == inv) {
        console.log('wow', c, Math.min(...p) + Math.max(...p));
        break;
      }
    }
    // console.log(c);
  }
});