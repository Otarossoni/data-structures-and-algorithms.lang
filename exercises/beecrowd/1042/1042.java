// https://judge.beecrowd.com/pt/problems/view/1042
import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] nums = { sc.nextInt(), sc.nextInt(), sc.nextInt() };
        int[] sorted = nums.clone();
        Arrays.sort(sorted);

        for (int n : sorted) System.out.println(n);
        System.out.println();
        for (int n : nums) System.out.println(n);

        sc.close();
    }
}
