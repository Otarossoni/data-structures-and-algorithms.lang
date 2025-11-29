// https://judge.beecrowd.com/pt/problems/view/1101
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            int m = sc.nextInt();
            int n = sc.nextInt();

            if (m <= 0 || n <= 0) {
                break;
            }

            if (m > n) {
                int temp = m;
                m = n;
                n = temp;
            }

            int sum = 0;
            for (int i = m; i <= n; i++) {
                System.out.print(i + " ");
                sum += i;
            }
            System.out.println("Sum=" + sum);
        }

        sc.close();
    }
}
