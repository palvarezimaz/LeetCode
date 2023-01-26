function containsDuplicate(nums: number[]): boolean {
    nums.sort(function  (a, b) {
      return a - b;
    });
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true
        }
    }
    return false
};