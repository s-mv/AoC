let year = process.argv[2];
let day = process.argv[3];

const fs = require('fs');

fs.readFile(`./${year}/input.day${day}.txt`, 'utf8', (err, data) => {
  if (err) {
    console.log("Oops, there's an error reading the input file:\n", err);
    return;
  }
  console.log('Day', day, '\n');
  require(`./${year}/day${day}.js`)(data);
});