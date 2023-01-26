function lengthOfLastWord(s: string): number {
    const sToArray: string[] = s.trim().split(' ')
    return sToArray[sToArray.length - 1].length
};