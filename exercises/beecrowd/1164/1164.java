// https://judge.beecrowd.com/pt/problems/view/1164
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();

        while (t-- > 0) {
            int n = sc.nextInt();
            int sum = 0;

            for (int i = 1; i < n; i++)
                if (n % i == 0) sum += i;

            if (sum == n) System.out.println(n + " eh perfeito");
            else System.out.println(n + " nao eh perfeito");
        }

        sc.close();
    }
}
