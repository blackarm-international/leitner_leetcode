
let nums = [];
let target;

nums = [2,7,11,15];
target = 9;

// nums = [3,2,4];
// target = 6;

// nums = [3,3];
// target = 6;


var twoSum = function(nums, target) {
    let loop1;
    let loop2;
    for (loop1 = 0; loop1 < nums.length; loop1 += 1) {
        for (loop2 = loop1 +1; loop2 < nums.length; loop2 += 1) {
            if (nums[loop1] + nums[loop2] === target) {
                return [loop1, loop2];
            }
        }
    }
    return 'not found';
};

console.log(twoSum(nums, target))
