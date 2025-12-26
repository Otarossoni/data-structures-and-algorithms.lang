// https://judge.beecrowd.com/pt/problems/view/1160
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();
        while (t-- > 0) {
            int pa = sc.nextInt();
            int pb = sc.nextInt();
            double g1 = sc.nextDouble();
            double g2 = sc.nextDouble();
            int years = 0;

            while (pa <= pb && years <= 100) {
                pa += pa * g1 / 100.0;
                pb += pb * g2 / 100.0;
                years++;
            }

            if (years > 100) System.out.println("Mais de 1 seculo.");
            else System.out.println(years + " anos.");
        }

        sc.close();
    }
}
