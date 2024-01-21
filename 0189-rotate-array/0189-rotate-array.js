/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    const rotatedPart = nums.splice(nums.length - k, k);
    nums.unshift(...rotatedPart);
    
    
    // while (k--) {
    //     nums.unshift(nums.pop())
    // }
    // return nums

//     for (let i = 0; i < k; i++) {
//         var lastNum = nums.splice(-1)
//         nums.unshift(lastNum)
//     }
    
//     return nums
};