// https://leetcode.com/problems/two-sum/description/
package main

func twoSum(nums []int, target int) []int {
	pMap := map[int]int{}

	for i, n := range nums {
		diff := target - n
		if j, targetFound := pMap[diff]; targetFound {
			return []int{j, i}
		}
		pMap[n] = i
	}

	return []int{}
}
