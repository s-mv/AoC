module.exports = (data) => {
  // part 1
  let arr = data.split("\n").map(x => x.split(""));
  // let arr = ["12345", "23456", "34567"].map(x => x.split(""));
  let transpose = arr[0].map((x, i) => arr.map(x => ~~x[i]));
  // gamma
  let gamma = "0b";
  for (let i = 0; i < transpose.length; i++) {
    let n = transpose[i];
    let a = Math.round(n.reduce((a, b) => a + b) / n.length);
    gamma += `${a}`;
  }
  console.log(gamma, "=", ~~gamma);
  let epsilon = "0b";
  for (let i = 2; i < gamma.length; i++) {
    epsilon += `${1 - ~~gamma[i]}`;
  }

  console.log(epsilon, "=", ~~epsilon);
  console.log("part 1", gamma * epsilon);
  console.log("\n\n");
  // part 2
  let oxb = [], cob = []; // rating bits
  let ox, co; // ratings
  // oxygen generator rating
  let arraytmp = [...arr];
  let transtmp = [...transpose];

  // first go through transpose
  for (let i = 0; i < transtmp.length; i++) {
    // most common bit
    let commonmost = Math.round(transtmp[i].reduce((a, b) => a + b) / transtmp[i].length);
    // go through array now
    for (let j = 0; j < arraytmp.length; j++) {
      // the important number
      let bit = arraytmp[j][i];

      if (~~bit != ~~commonmost) {
        arraytmp.splice(j, 1);
        j--;
      }
    }
    // re-evaluate transpose
    transtmp = arraytmp[0].map((x, i) => arraytmp.map(x => ~~x[i]));

    // break if loop no more needed
    if (arraytmp.length <= 1) break;
  }
  oxb = arraytmp[0];


  // carbon scrubber rating
  // reinit arraytmp
  arraytmp = [...arr];
  transtmp = [...transpose];

  // first go through transpose
  for (let i = 0; i < transtmp.length; i++) {
    // least common bit
    let commonleast = 1 - Math.round(transtmp[i].reduce((a, b) => a + b) / transtmp[i].length);
    // go through array now
    for (let j = 0; j < arraytmp.length; j++) {
      // the important number
      let bit = arraytmp[j][i];

      if (~~bit != ~~commonleast) {
        arraytmp.splice(j, 1);
        j--;
      }
    }
    // re-evaluate transpose
    transtmp = arraytmp[0].map((x, i) => arraytmp.map(x => ~~x[i]));

    // break if loop no more needed
    if (arraytmp.length <= 1) break;
  }
  cob = arraytmp[0];

  co = "0b" + cob.join("");
  ox = "0b" + oxb.join("");
  console.log(co, ox);
  console.log("part 2", ~~co, "*", ~~ox, "=", ~~co * ~~ox)
}