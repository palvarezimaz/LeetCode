class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(t) < len(s):
            return False
        if len(s) == 0:
            return True

        sub_string = 0
        for i in range(0, len(t)):
            if sub_string <= len(s) - 1:
                if s[sub_string] == t[i]:
                    sub_string += 1

        return sub_string == len(s)

        