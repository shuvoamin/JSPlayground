
/**
 * Author: Shuvo Amin
 * 
 * programming interview question
 * leetcode.com => 1.Two Sum
 */

var nums = [11, 2, 7, 11, 15], 
    target = 9;

var twoSum = function(nums, target) {
    
    var returnIndices = [];
    var previousNumber = null;
    var previousIndex = null;
    
    for (var i = 0; i < nums.length; i++) {
        
        var currentNumber = nums[i];
        
        if (i > previousIndex) {
            
            var currentTarget = currentNumber + previousNumber;
        
            if (currentTarget == target) {
                returnIndices.push(i);

                console.log(returnIndices);
                return returnIndices;

            } else {
                returnIndices = [];
            }
        
        }

        previousIndex = i;
        returnIndices.push(i);
        previousNumber = currentNumber;

    }

};

twoSum(nums, target);