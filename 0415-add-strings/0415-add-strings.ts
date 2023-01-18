function addStrings(num1: string, num2: string): string {
    let result: string = ''
    let stack: number = 0

    if (num1.length > num2.length) {
        let diff: string = '0'.repeat(num1.length - num2.length)
        num2 = diff + num2
    } else {
        let diff: string = '0'.repeat(num2.length - num1.length)
        num1 = diff + num1
    }
    for (let i: number = num1.length - 1; i >= 0; --i) {
        let parcialResult: number = Number(num1[i]) + Number(num2[i]) + stack
        if (parcialResult >= 10) {
            const tempArray: string[] = (parcialResult).toString().split('')
            result = result + tempArray[1]
            stack = Number(tempArray[0])
        }
        else {
            result = result + parcialResult.toString()
            stack = 0
        }
    }
    if (stack > 0) {
        result = result + stack.toString()
    }
    return result.split('').reverse().join('')
};