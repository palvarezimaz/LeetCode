function addStrings(num1: string, num2: string): string {
    let result: string = ''
    let stack: number = 0
    let stringDiff: number = Math.abs(num1.length - num2.length)

    if (num1.length > num2.length) {
        num2 = '0'.repeat(stringDiff) + num2
    } else {
        num1 = '0'.repeat(stringDiff) + num1
    }

    for (let i: number = num1.length - 1; i >= 0; --i) {
        let parcialResult: number = Number(num1[i]) + Number(num2[i]) + stack
        if (parcialResult >= 10) {
            const tempArray: string[] = (parcialResult).toString().split('')
            result += tempArray[1]
            stack = Number(tempArray[0])
        }
        else {
            result += parcialResult.toString()
            stack = 0
        }
    }

    if (stack > 0) {
        result += stack.toString()
    }

    return result.split('').reverse().join('')
};