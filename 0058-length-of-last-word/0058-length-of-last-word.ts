function lengthOfLastWord(s: string): number {
    const sToArray: string[] = s.split(' ').filter(e => e.length !== 0)
    return sToArray[sToArray.length - 1].length
};