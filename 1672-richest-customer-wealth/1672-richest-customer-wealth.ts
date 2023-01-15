function maximumWealth(accounts: number[][]): number {
    let result: number = 0
    const partialResult: number[] = []
    for (let client of accounts) {
        partialResult.push(client.reduce((tot, acc) => { return tot + acc }))
    }
    for (let i: number = 0; i < partialResult.length; i++) {
        if (partialResult[i] > result) {
            result = partialResult[i]
        }
    }
    return result
}