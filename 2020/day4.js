module.exports = (data) => {
    let arr = data.split('\n\n');
    console.log(arr);
    let count = 0;
    let count2 = 0;
    for (let pass of arr) {
      pass = pass + ' ';
      count += ~~(pass.match(
        /((byr\:)|(iyr\:)|(eyr\:)|(hgt\:)|(hcl\:)|(ecl\:)|(pid\:))/gim
      ).length == 7);
      let test2 = pass.match(
        /((byr\:(19[2-9][0-9]|200[0-2])[\n ]|(iyr\:(20(1[0-9]|20))[\n ])|(eyr\:20(2[0-9]|30)[\n ])|(hgt\:(1([5-8][0-9]|9[0-3])cm|(59|6[0-9]|7[0-6])in)[\n ])|(hcl\:\#([0-9]|[a-f]){6}[\n ])|(ecl\:(amb|b(lu|rn)|g(ry|rn)|hzl|oth)[\n ])|(pid\:[0-9]{9}[\n ])))/gi
      );
      if (!test2) {
        console.log(pass)
      }
      count2 += ~~(test2 && test2.length == 7);
    }
    console.log(count, 'valid passports without checking initials');
    console.log(count2, 'valid passports checking initials');
}