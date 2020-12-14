module.exports = (data) => {
  let arr = data.split(/\n/gi).sort((a, b) => { return a - b; });
  // arr.push(arr[arr.length - 1] + 3);
  let nums = { '1': 0, '3': 1 }; // first element (0) and last element (n + 3)
  let optional = [];
  for (let i = 1; i < arr.length; i++) {
    nums[~~(~~arr[i] - ~~arr[i - 1])]++;
    (Math.abs(~~arr[i - 1] - ~~arr[i + 1]) <= 3) && optional.push(~~arr[i]);
  }
  console.log(nums, nums[1] * nums[3], 'is the multiplication of 3-jolt and 1-jolt differences');
  console.log(optional, optional.length, arr.length, optional.length);
}