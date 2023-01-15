function maximumWealth(accounts: number[][]): number {
    let result: number = 0
    
    for (let client of accounts) {
        const partialResult = client.reduce((tot, acc) => tot + acc )
        if (partialResult > result) {
            result = partialResult
        }
    }
    return result
}