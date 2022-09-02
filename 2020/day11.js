module.exports = (data) => {
  let arr = data.split('\n');
  let next = data.split('\n');
  console.log(next, arr);
  let i = 0;
  let w = arr[0].length;
  let h = arr.length;
  let settled = false;
  while (!settled) {
    for (let y = 0; y < arr.length; y++) {
      for (let x = 0; x < arr[y].length; x++) {
        let a = arr[y - 1],
          b = arr[y + 1],
          c = arr[y][x - 1],
          d = arr[y][x + 1];
        let o = []
        if (a) {
          o.push(arr[y - 1][x]);
          if (c) o.push(arr[y - 1][x - 1]);
          if (d) o.push(arr[y - 1][x + 1]);
        };
        if (c) o.push(arr[y][x - 1]);
        if (d) o.push(arr[y][x + 1]);
        if (b) {
          o.push(arr[y + 1][x]);
          if (c) o.push(arr[y + 1][x - 1]);
          if (d) o.push(arr[y + 1][x + 1])
        };
        let n = (o.join('').match(/#/gi) || []).length;
        if (n <= 0 && arr[y][x] == 'L') {
          next[y] = next[y].substring(0, x) + '#' + next[y].substring(x + 1)
        } else if (n >= 4 && arr[y][x] == '#') {
          next[y] = next[y].substring(0, x) + 'L' + next[y].substring(x + 1)
        }
      }
    }
    console.log(next, arr);
    if (arr.join('') == next.join('')) {
      settled = true;
    }
    arr = [...next];
    i++;
  }
  console.log(i, (arr.join('').match(/#/gi) || []).length);

  // part 2

  let arr = data.split('\n');
  let next = data.split('\n');
  console.log(next, arr);
  let i = 0;
  let w = arr[0].length;
  let h = arr.length;
  let settled = false;
  while (!settled) {
    for (let y = 0; y < arr.length; y++) {
      for (let x = 0; x < arr[y].length; x++) {
        let a = arr[y - 1],
          b = arr[y + 1],
          c = arr[y][x - 1],
          d = arr[y][x + 1];
        let o = []
        if (a) {
          o.push(arr[y - 1][x]);
          if (c) o.push(arr[y - 1][x - 1]);
          if (d) o.push(arr[y - 1][x + 1]);
        };
        if (c) o.push(arr[y][x - 1]);
        if (d) o.push(arr[y][x + 1]);
        if (b) {
          o.push(arr[y + 1][x]);
          if (c) o.push(arr[y + 1][x - 1]);
          if (d) o.push(arr[y + 1][x + 1])
        };
        let n = (o.join('').match(/#/gi) || []).length;
        if (n <= 0 && arr[y][x] == 'L') {
          next[y] = next[y].substring(0, x) + '#' + next[y].substring(x + 1)
        } else if (n >= 5 && arr[y][x] == '#') {
          next[y] = next[y].substring(0, x) + 'L' + next[y].substring(x + 1)
        }
      }
    }
    console.log(next, arr);
    if (arr.join('') == next.join('')) {
      settled = true;
    }
    arr = [...next];
    i++;
  }
  console.log(i, (arr.join('').match(/#/gi) || []).length);
}

/*
 - If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
 - If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
 - Otherwise, the seat's state does not change.
 */