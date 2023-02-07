function pivotIndex(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        let leftSum = nums.slice(0, i).reduce((tot, acc) => {return tot + acc}, 0);
        let rightSum = nums.slice(i + 1).reduce((tot, acc) => {return tot + acc}, 0);

        if (leftSum === rightSum) return i;
        
    }
    return -1;
};