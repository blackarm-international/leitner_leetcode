let nums = [];
let target;
var twoSum = function(nums, target) {
    var hash = {};
    var len = nums.length;
    // console.log('nums - ' + JSON.stringify(nums));
    // console.log('target - ' + JSON.stringify(target));
    for (var i = 0; i < len; i++) {
        // console.log('');
        // console.log('value - ' + nums[1]);
        // console.log('position - ' + i);
        // does the hash have this number as a key
        if (nums[i] in hash) {
            return [hash[nums[i]], i];
        }
        // store this in an object where the key is (target - number) and the value is the position in the array
        hash[target - nums[i]] = i;
        // console.log(hash);
    }
    return [-1, -1];
};

nums = [2,7,11,15];
target = 22;
console.log(twoSum(nums, target))
