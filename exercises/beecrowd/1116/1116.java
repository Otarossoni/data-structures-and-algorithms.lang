// https://judge.beecrowd.com/pt/problems/view/1116
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int tests = sc.nextInt();

        for (int i = 0; i < tests; i++) {
            double x = sc.nextDouble();
            double y = sc.nextDouble();

            if (y == 0.0) {
                System.out.println("divisao impossivel");
            } else {
                System.out.printf("%.1f%n", x / y);
            }
        }

        sc.close();
    }
}
