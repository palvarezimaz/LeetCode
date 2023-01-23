# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    to_evaluate = s.downcase.gsub(/[^0-9a-z]/i,'')
    if to_evaluate == to_evaluate.reverse
        return true
    end
    return false
end