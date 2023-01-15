function canConstruct(ransomNote: string, magazine: string): boolean {
 let map: object = {}
    let counter: number = 0

    for (let i: number = 0; i < ransomNote.length; i++) {
        if (map[ransomNote[i]] !== undefined) {
            map[ransomNote[i]]++
            counter++
        } else {
            map[ransomNote[i]] = 1
            counter++
        }
    }
    for (let i: number = 0; i < magazine.length; i++) {
        if (map[magazine[i]] > 0) {
            map[magazine[i]]--
            counter--
        }
    }
    if (counter > 0) {
        return false
    } else {
        return true
    }
};