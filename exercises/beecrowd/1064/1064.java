// https://judge.beecrowd.com/pt/problems/view/1064
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = 0;
        double sum = 0;

        for (int i = 0; i < 6; i++) {
            double v = sc.nextDouble();
            if (v > 0) {
                count++;
                sum += v;
            }
        }

        System.out.println(count + " valores positivos");
        System.out.printf("%.1f\n", sum / count);
    }
}
