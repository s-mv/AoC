module.exports = (data) => {
  let arr = data.split('\n');
  let x = 0, y = 0;
  let dir = 0; // 0 - 360
  for (let i in arr) {
    let n = ~~arr[i].split(/[A-Za-z]/)[1];
    switch (arr[i][0]) {
      case 'N':
        y -= n;
        break;
      case 'S':
        y += n;
        break;
      case 'F':
        switch (Math.round(dir / 90)) {
          case 0: x += n;
            break;
          case 1: y -= n;
            break;
          case 2: x += n;
            break;
          case 3: y += n;
            break;
        }
        break;
      case 'W':
        x -= n;
        break;
      case 'E':
        x += n;
        break;
      case 'L':
        (dir >= 360) && (dir = dir - 360);
        dir = (dir + n) % 360;
        break;
      case 'R':
        (dir <= 0) && (dir = 360 - dir);
        dir = (dir - n) % 360;
        break;
      default:
        break;
    }
  }
  console.log(x, y, Math.abs(x) + Math.abs(y));
}