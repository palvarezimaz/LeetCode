class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        res_dic = {}

        for char in range(len(s)):
            if s[char] not in res_dic:
                res_dic[s[char]] = t[char]
            else:
                if res_dic[s[char]] == t[char]:
                    pass
                else:
                    return False
        
        res_dic = {}
        for char in range(len(t)):
            if t[char] not in res_dic:
                res_dic[t[char]] = s[char]
            else:
                if res_dic[t[char]] == s[char]:
                    pass
                else:
                    return False
        return True