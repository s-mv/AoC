module.exports = {
  run: function (data) {
    let arr = data.split('\n\n');
    let count = 0;
    let count2 = 0;
    // let i = 3;
    for (let i in arr) {
      console.log(arr[i]);
      count += [...(new Set(arr[i].match(/[a-z]/gi)))].length;
      let els = arr[i].split('\n');
      let elN = [];
      for (let i in els) {
        elN.push([...(new Set(els[i].match(/[a-z]/gi)))]);
      }
      console.log(elN);
      // let p = elN.join(" ").split(/[, ]/gi);
      let p = elN[0];
      console.log('P', p);
      for (let i = 1; i < p.length; i++) {
        for (let j in p[0]) {
          console.log(p[i].match(p[0][j]));
        }
      }
    }
    console.log(count, 'total votes if anyone answers...');
    console.log(count2, 'total votes if everyone answers...');
  }
};