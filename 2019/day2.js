module.exports = (data) => {
    let arr = data.split(',');
    let final = 19690720;
    function getNum(arr) {
      let breakable = false;
      for (let i = 0; i < arr.length; i += 4) {
        let I = ~~arr[i], O = ~~arr[i + 3];
        let j = ~~arr[i + 1], k = ~~arr[i + 2];
        switch (I) {
          case 1:
            arr[O] = ~~(~~arr[j] + ~~arr[k]);
            break;
          case 2:
            arr[O] = ~~(~~arr[j] * ~~arr[k]);
            break;
          case 99:
            // console.log('terminating...', I);
            breakable = true;
            break;
          default:
            // console.log('(due to error)', I);
            breakable = true;
            break;
        }
        if (breakable) break;
      }
      return (arr[0]);
    }
    // checking for 19690720
    for (let i = 0; i <= 99; i++) {
      for (let j = 0; j <= 99; j++) {
        let newArr = [...arr];
        newArr[1] = i, newArr[2] = j;
        if (getNum(newArr) == final) {
          console.log('final noun:', i, '\nand verb:', j, '\n100 * noun + verb =', 100 * i + j);
        }
      }
    }
    arr[1] = 12, arr[2] = 2;
    console.log(getNum(arr), 'is the first number.');
}