function addDigits(num: number): number {
  if (num < 10) {
        return num
    } else {
        let partialResult: number = 0
        const numToStringArray: string[] = num.toString().split('')
        
        partialResult = numToStringArray.reduce((tot, acc) => tot + parseInt(acc), 0)
        while (partialResult > 9) {
            const numToStringArray: string[] = partialResult.toString().split('')
            partialResult = numToStringArray.reduce((tot, acc) => tot + parseInt(acc), 0)

        }
        return partialResult
    }
};