function romanToInt(s: string): number {
    let result: number = 0
    const romanToNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    const sToArray: string[] = s.split('')

    for (let i: number = 0; i < sToArray.length; i++) {
        if (romanToNumbers[sToArray[i + 1]] > romanToNumbers[sToArray[i]]) {
            result += romanToNumbers[sToArray[i + 1]] - romanToNumbers[sToArray[i]]
            i++
        } else {
            result += romanToNumbers[sToArray[i]]
        }
    }
    
    return result
};