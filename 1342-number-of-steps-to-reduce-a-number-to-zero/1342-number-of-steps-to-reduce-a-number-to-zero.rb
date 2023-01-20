# @param {Integer} num
# @return {Integer}
def number_of_steps(num)
    count = 0
    num_to_reduce = num.to_i
    while num_to_reduce > 0
        if num_to_reduce % 2 != 0 
            num_to_reduce = (num_to_reduce - 1)
            count = count += 1
        else
            num_to_reduce = num_to_reduce / 2
            count += 1
        end
    end
    count - 1
    return count    
end