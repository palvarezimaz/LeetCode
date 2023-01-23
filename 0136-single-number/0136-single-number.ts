function singleNumber(nums: number[]): number {
    const result: number[] = nums.sort()
    while (result[0] === result[1]) {
        result.splice(0, 2)
    }
    return result[0]
};