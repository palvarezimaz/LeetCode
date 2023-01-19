# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    num_to_ar = x.to_s
    num_to_ar == num_to_ar.reverse
end