function strStr(haystack: string, needle: string): number {
    if (!haystack.includes(needle)) {
        return -1 
    } else {
        return haystack.indexOf(needle)
    }
};