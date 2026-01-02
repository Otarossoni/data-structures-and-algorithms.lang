// https://judge.beecrowd.com/pt/problems/view/1176
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        long[] fib = new long[61];
        fib[0] = 0;
        fib[1] = 1;

        for (int i = 2; i < 61; i++)
            fib[i] = fib[i - 1] + fib[i - 2];

        int t = sc.nextInt();
        while (t-- > 0) {
            int pos = sc.nextInt();
            System.out.println("Fib(" + pos + ") = " + fib[pos]);
        }

        sc.close();
    }
}
