module.exports = (data) => {
  let arr = data.split('\n');
  let acc = 0;
  let acc2 = 0;
  let last;
  let cycle = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '') { continue }
    let p = arr[i].split(/ /gi);
    if (cycle[i]) {
      console.log(cycle[i]);
      let k = Object.keys(cycle);
      break;
    }
    cycle[i] = p;
    switch (p[0]) {
      case 'acc':
        acc += Number(p[1]);
        break;
      case 'jmp':
        i += Number(p[1]) - 1;
        break;
      case 'nop':
        // lol :P
        break;
      default:
        break;
    }
    // console.log(p, acc);
  }
  console.log(acc, 'without letting infinite loop repeat');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '') { continue }
    let p = arr[i].split(/ /gi);
    console.log(p[0]);
    switch (p[0]) {
      case 'acc':
        acc2 += Number(p[1]);
        break;
      case 'jmp':
        i += Number(p[1]) - 1;
        break;
      case 'nop':
        // lol :P
        break;
      default:
        break;
    }
  }
  console.log(acc2, 'after fixing infinite loop')
}