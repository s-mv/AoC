function Board(cellstr) {
  this.cells = [
    cellstr[0].match(/.{1,3}/gi),
    cellstr[1].match(/.{1,3}/gi),
    cellstr[2].match(/.{1,3}/gi),
    cellstr[3].match(/.{1,3}/gi),
    cellstr[4].match(/.{1,3}/gi)
  ];
}

Board.prototype.mark = function (num) {
  for (let i = 0; i < this.cells.length; i++) {
    for (let j = 0; j < this.cells[i].length; j++) {
      if (num == ~~this.cells[i][j]) {
        this.cells[i][j] = "X" + this.cells[i][j];
        break;
      }
    }
  }
};

// has it won?
Board.prototype.check = function () {
  let yes = false;
  for (let i = 0; i < this.cells.length; i++) {
    if (yes) break;
    if (this.cells[i].every(v => v[0] == "X")) yes = true;
    for (let j = 0; j < this.cells[i].length; j++) {
      if (yes) break;
      if (this.cells.every(v => v[j][0] == "X")) yes = true;
    }
  }
  return yes;
};

module.exports = (data) => {
  // part 1
  let arr = data.split("\n");
  let nums = arr[0].split(",");
  arr.splice(0, 2);

  // boards array
  let boards = [];
  // init boards
  for (let i = 0; i < arr.length; i += 6) {
    boards.push(new Board([
      arr[i], arr[i + 1], arr[i + 2], arr[i + 3], arr[i + 4]
    ]));
  }
  let theBoardWhoLived, winningNum;
  let done = false;

  // go through numbers
  for (let n = 0; !done && n < nums.length; n++) {
    let num = ~~nums[n]; // current number
    for (let i = 0; !done && i < boards.length; i++) {
      let b = boards[i];
      b.mark(num);
      if (b.check()) {
        theBoardWhoLived = i;
        winningNum = num;
        done = true;
      }
    }
  }

  let boardWinner = boards[theBoardWhoLived];
  // boardWinner sum here
  let totalsum = 0;
  for (let i = 0; i < boardWinner.cells.length; i++) {
    const col = boardWinner.cells[i];
    for (let j = 0; j < col.length; j++) {
      const e = col[j];
      if (e[0] != "X") totalsum += ~~e;
    }
  }

  console.log(totalsum, winningNum);
  // sum code ends lol

  let result = totalsum * winningNum;

  console.log("part 1", result);

  // part 2
  {
    let boards = [];
    for (let i = 0; i < arr.length; i += 6) {
      boards.push(new Board([
        arr[i], arr[i + 1], arr[i + 2], arr[i + 3], arr[i + 4]
      ]));
    }
    let losingNum;
    let done = false;
    for (let n = 0; !done && n < nums.length; n++) {
      let num = ~~nums[n]; // current number
      for (let i = 0; !done && i < boards.length; i++) {
        let b = boards[i];
        b.mark(num);
        if (b.check()) {
          if (boards.length > 1) {
            boards.splice(i, 1);
            i--;
          } else {
            losingNum = num;
            done = true;
          }
        }
      }
    }
    let losingBoard = boards[0];
    let totalsum = 0;
    for (let i = 0; i < losingBoard.cells.length; i++) {
      const col = losingBoard.cells[i];
      for (let j = 0; j < col.length; j++) {
        const e = col[j];
        if (e[0] != "X") totalsum += ~~e;
      }
    }
    console.log(losingNum, totalsum);
    let result = losingNum * totalsum;

    console.log("part 2", result);
  }
}