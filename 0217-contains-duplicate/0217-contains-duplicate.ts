function containsDuplicate(nums: number[]): boolean {
  const sortedNums: number[] = nums.sort()
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true
        }
    }
    return false
};