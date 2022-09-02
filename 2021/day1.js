// data is the file contents
module.exports = (data) => {
  let arr = data.split("\n"); // array of values
  let count_inc = 0; // number of times increased
  for (let i = 1; i < arr.length; i++) {
    // add 1 if increasing else nope
    count_inc += ~~arr[i - 1] < ~~arr[i];
  }
  console.log("part 1:", count_inc);
  // part 2
  let count_inc2 = 0;
  // last window
  let lwin = undefined;
  for (let i = 2; i < arr.length; i++) {
    // three for this window
    let win = [~~arr[i - 2], ~~arr[i - 1], ~~arr[i]];
    // if lwin is defined check if increasing 
    lwin && (count_inc2 += win.reduce((a, b) => a + b) > lwin.reduce((a, b) => a + b));
    lwin = [...win]; // NOTE: is this needed? pass by value not reference so idk lol
  }
  console.log("part 2:", count_inc2);
}