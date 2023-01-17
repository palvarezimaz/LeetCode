function isValid(s: string): boolean {
    const pairs: { [char: string]: string } = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    const sToArray: string[] = [...s]
    const stack: string[] = []
    let matchingBrackets: boolean = true

    sToArray.forEach(char => {
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char)
        } else {
            if (stack[stack.length - 1] !== pairs[char]) {
                matchingBrackets = false
            } else {
                stack.pop()
            }
        }
    })
    if (stack.length > 0) {
        matchingBrackets = false
    }
    return matchingBrackets
}
