/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const numsCount = {}
    for (let i = 0; i < nums.length; i++) {
        if (numsCount[nums[i]] === undefined) {
            numsCount[nums[i]] = 1
        } else {
            numsCount[nums[i]]++
        }
    }
    console.log(numsCount)
    let majNum = 0
    let result = ''
    for (let key in numsCount) {
        if (numsCount[key] > majNum) {
            majNum = numsCount[key]
            result = key
        }
    }
    return result
};