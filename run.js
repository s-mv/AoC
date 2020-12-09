let year = process.argv[2];
let day = process.argv[3];

const fs = require('fs');

let script = require(`./${year}/day${day}.js`);

fs.readFile(`./${year}/input.day${day}.txt`, 'utf8', (err, data) => {
  if (err) {
    console.log("Oops, there's an error reading the input file:\n", err);
    return;
  }
  script.run(data);
})