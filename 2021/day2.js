module.exports = (data) => {
  // part 1
  // position of submarine
  let pos = {
    forward: 0,
    depth: 0
  }
  let arr = data.split("\n");
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let command = str.split(" ");
    let cmd = command[0], val = ~~command[1];

    if (cmd == "forward") pos.forward += val;
    else if (cmd == "up") pos.depth -= val;
    else pos.depth += val;
  }
  console.log("position:");
  console.table(pos);
  console.log("product:", pos.forward * pos.depth);

  // part 2
  // position of submarine
  let pos2 = {
    forward: 0,
    depth: 0,
    aim: 0
  }

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let command = str.split(" "); // [command, value]
    let cmd = command[0], val = ~~command[1];
    if (cmd == "forward") {
      pos2.forward += val;
      pos2.depth += pos2.aim * val;
    } else if (cmd == "up") {
      pos2.aim -= val;
    } else {
      pos2.aim += val;
    }
  }

  console.log("position:");
  console.table(pos2);
  console.log(" product:", pos2.forward * pos2.depth);

}