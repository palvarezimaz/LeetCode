function longestCommonPrefix(strs: string[]): string {
    let result: string = ''
    let shortest_str_length = strs.reduce((a, b) => a.length <= b.length ? a : b).length

    for (let i: number = 0; i < shortest_str_length; i++) {
        let char_to_eval = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] === char_to_eval) {
                continue
            } else {
                return result
            }
        }
        result = result + char_to_eval
    }
    return result
};