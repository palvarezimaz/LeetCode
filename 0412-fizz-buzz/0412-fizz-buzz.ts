function fizzBuzz(n: number): string[] {
    const result: string[] = []
    for (let i: number = 1; i <= n; i++)
        if (i % 15 === 0) {
            result.push('FizzBuzz')
        } else if (i % 3 === 0) {
            result.push('Fizz')
        } else if (i % 5 === 0) {
            result.push('Buzz')
        } else {
            result.push(`${i}`)
        }
    return result
};