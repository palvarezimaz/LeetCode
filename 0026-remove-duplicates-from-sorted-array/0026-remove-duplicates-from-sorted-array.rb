# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    count = 0
    (0...nums.length - 1).each do |index|
        if nums[index] != nums[index + 1]
            nums[count] = nums[index]
            count += 1
        end
    end
    nums[count] = nums[nums.length - 1]
    count += 1
    return count
end