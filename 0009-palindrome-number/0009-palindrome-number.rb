# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    num_to_array = x.to_s
    if num_to_array == num_to_array.reverse
        return true
    else
        return false
    end 
end