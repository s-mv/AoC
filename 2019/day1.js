module.exports = (data) => {
    let arr = data.split('\n');
    // let arr = [14, 1969, 100756];
    let total = 0;
    let total2 = 0;
    for (let i = 0; i < arr.length; i++) {
      let p = ~~arr[i];
      if (p == 0) {
        continue;
      }
      total += Math.floor(p / 3) - 2;
      let n = 0;
      while (p >= 0) {
        p = Math.floor(p / 3) - 2;
        if (p <= 0) break;
        n += p;
        total2 += p;
      }
    }
    console.log('total fuel needed:', total);
    console.log('total fuel needed for fuel:', total2);
}