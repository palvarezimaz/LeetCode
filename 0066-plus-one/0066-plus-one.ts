function plusOne(digits: number[]): number[] {
    const res: number[] = digits
    let carry: number = 0
    if (res[res.length - 1] < 9) {
        res[res.length - 1] += 1
    } else {
        carry = 1
        for (let i = res.length; i > 0; i--) {
            if (res[i - 1] === 9) {
                res[i - 1] = 0
            } else {
                res[i - 1] += 1
                carry = 0
                break
            }
        }
    }
    if (carry > 0) {
        res.unshift(1)
    }
    return res
};