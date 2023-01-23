# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    sorted_arr = nums.sort
    while sorted_arr[0] == sorted_arr[1]
        sorted_arr.slice!(0, 2)
    end
    return sorted_arr[0]
end