
let nums = [];
let target;

nums = [2,7,11,15];
target = 9;

// nums = [3,2,4];
// target = 6;

// nums = [3,3];
// target = 6;


var twoSum = function(nums, target) {
    var hash = {};
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        console.log('')
        console.log(i)
        console.log(nums[1])
        console.log(hash)
        if (nums[i] in hash) {
            return [hash[nums[i]], i];
        }
        hash[target - nums[i]] = i
    }
    return [-1, -1];
};

console.log(twoSum(nums, target))
