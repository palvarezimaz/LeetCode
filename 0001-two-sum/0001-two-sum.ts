function twoSum(nums: number[], target: number): number[] {
    const result: number[] = []
    for (let j: number = 0; j < nums.length; j++) {
        for (let i: number = j + 1; i < nums.length; i++) {
            if (nums[j] + nums[i] === target) {
                result.push(j, i)
                return result
            }
        }
    }
    return result
};