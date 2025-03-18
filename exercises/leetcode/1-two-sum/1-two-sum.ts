// https://leetcode.com/problems/two-sum/description/
function twoSum(nums: number[], target: number): number[] {
    const pMap: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const diff = target - n;

        if (diff in pMap) {
            return [pMap[diff], i];
        }

        pMap[n] = i;
    }

    return [];
}