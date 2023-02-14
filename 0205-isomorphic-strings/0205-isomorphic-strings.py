class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        s_dic = {}
        t_dic = {}
        loops = len(s)

        for char in range(loops):
            if s[char] not in s_dic:
                s_dic[s[char]] = t[char]
            else:
                if s_dic[s[char]] == t[char]:
                    pass
                else:
                    return False
            if t[loops - char - 1] not in t_dic:
                t_dic[t[loops - char - 1]] = s[loops - char - 1]
            else:
                if t_dic[t[loops - char - 1]] == s[loops - char - 1]:
                    pass
                else:
                    return False

        return True