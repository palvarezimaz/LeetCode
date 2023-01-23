# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    s.downcase.gsub(/[^0-9a-z]/i,'') == s.downcase.gsub(/[^0-9a-z]/i,'').reverse
end