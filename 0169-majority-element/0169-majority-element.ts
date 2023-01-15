function majorityElement(nums: number[]): number {
    const numsCount = {}
    for (let i: number = 0; i < nums.length; i++) {
        if (numsCount[nums[i]] === undefined) {
            numsCount[nums[i]] = 1
        } else {
            numsCount[nums[i]]++
        }
    }
    console.log(numsCount)
    let majNum: number = 0
    let result: number
    for (let key in numsCount) {
        if (numsCount[key] > majNum) {
            majNum = numsCount[key]
            result = parseInt(key)
        }
    }
    return result
};