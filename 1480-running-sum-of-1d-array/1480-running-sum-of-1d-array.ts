function runningSum(nums: number[]): number[] {
    let count = 0
    let result: number[] = []
    for (let i = nums.length; i > 0; i--) {
        count = nums.reduce((tot, acc) => { return tot + acc }, 0)
        nums.pop()
        result.unshift(count)
    }
    return result
};

