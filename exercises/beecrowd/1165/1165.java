// https://judge.beecrowd.com/pt/problems/view/1165
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            boolean isPrime = true;

            if (n <= 1) isPrime = false;
            else {
                for (int i = 2; i * i <= n; i++)
                    if (n % i == 0) { isPrime = false; break; }
            }

            if (isPrime) System.out.println(n + " eh primo");
            else System.out.println(n + " nao eh primo");
        }

        sc.close();
    }
}
