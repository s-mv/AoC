module.exports = (data) => {
    let arr = data.split('\n');
    let highest = 0;
    let IDs = [];
    for (const i in arr) {
      let p = arr[i];
      if (arr[i] == '') { continue; }
      let rangex = [0, 127]
      let rangey = [0, 7]
      for (let k = 0; k < p.length; k++) {
        switch (p[k]) {
          case 'F':
            rangex[1] = Math.floor((rangex[0] + rangex[1]) / 2);
            break;
          case 'B':
            rangex[0] = Math.ceil((rangex[0] + rangex[1]) / 2);
            break;
          case 'L':
            rangey[1] = Math.floor((rangey[0] + rangey[1]) / 2);
            break;
          case 'R':
            rangey[0] = Math.ceil((rangey[0] + rangey[1]) / 2);
            break;
          default:
            break;
        }
      }
      // ranges.push({ x: rangex[0], y: rangey[0] });
      IDs.push(rangex[0] * 8 + rangey[0]);
      (rangex[0] * 8 + rangey[0] > highest) && (highest = rangex[0] * 8 + rangey[0]);
    }
    IDs.sort(function (a, b) { return a - b });
    for (let i in IDs) {
      (IDs[i - 1] && IDs[i] - IDs[i - 1] != 1) && (console.log("your seat is", IDs[i] - 1));
    }
    console.log(highest, "is the greatest ID.");
}