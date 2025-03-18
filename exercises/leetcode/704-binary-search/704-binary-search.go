// https://leetcode.com/problems/binary-search/description/

package main

func search(nums []int, target int) int {
	low := 0
	high := len(nums) - 1

	for low <= high {
		medium := (low + high) / 2
		value := nums[medium]

		if value == target {
			return medium
		}

		if value > target {
			high = medium - 1
		} else {
			low = medium + 1
		}
	}

	return -1
}
