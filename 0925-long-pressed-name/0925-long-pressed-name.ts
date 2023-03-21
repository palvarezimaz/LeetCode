function isLongPressedName(name: string, typed: string): boolean {
    const name_arr = name.split('')
    const typed_arr = typed.split('')
    const typed_len = typed.length
     if (typed_len < name.length) {
        return false
    }
    for (let i = 0; i < typed_len; i++) {
        if (name_arr[i] === typed_arr[i]) {
        } else {
            if (typed_arr[i] === typed_arr[i - 1]) {
                typed_arr.splice(i, 1)
                i--
            } else {
                return false
            }
        }
    }
    return true
};