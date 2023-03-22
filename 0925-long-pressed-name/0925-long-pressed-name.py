class Solution:
    def isLongPressedName(self, name: str, typed: str) -> bool:
        count = 0
        for c in range(len(typed)):
            if count < len(name) and name[count] == typed[c]:
                count += 1
            elif c == 0 or typed[c] != typed[c - 1]:
                return False
        return count == len(name)
