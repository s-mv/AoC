module.exports = {
  run: function (data) {
    let arr = data.split('\n');
    let count = 0;
    let bagInfo = [];
    for (let i in arr) {
      if (arr[i] == '') {
        continue;
      }
      console.log(arr[i].split(/bags contain/gi));

      // count += (arr[i].split(/contain/gi)[1].match(/shiny gold/) != null);
      // console.log(arr[i].split(/contain/gi)[1].match(/shiny gold/));
    }
    console.log(count)
  }
};