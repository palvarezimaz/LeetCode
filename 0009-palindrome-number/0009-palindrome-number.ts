function isPalindrome(x: number): boolean {
    let result: boolean = true
    let numberToArray: string[] = x.toString().split('')

    for (let i: number = 0; i < (numberToArray.length / 2); i++) {
        if (numberToArray[i] !== numberToArray[numberToArray.length - 1 - i]) {

            result = false
            return result
        }
    }
    return result
};