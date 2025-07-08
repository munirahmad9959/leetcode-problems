/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];

    // ✅ Step 1: Sort the array numerically
    nums.sort((a, b) => a - b);

    // ✅ Step 2: Loop through each number
    for (let i = 0; i < nums.length - 2; i++) {
        // ✅ Skip duplicates for 'i'
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        // ✅ Step 3: Use two-pointer technique
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // ✅ Skip duplicates for 'left' and 'right'
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

console.log("Resultant array is: ", threeSum([-1, 0, 1, 2, -1, -4]));
