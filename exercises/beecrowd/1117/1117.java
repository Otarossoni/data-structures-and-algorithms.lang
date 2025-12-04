// https://judge.beecrowd.com/pt/problems/view/1117
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double sum = 0.0;
        int validCount = 0;

        while (validCount < 2) {
            double score = sc.nextDouble();

            if (score < 0.0 || score > 10.0) {
                System.out.println("nota invalida");
            } else {
                sum += score;
                validCount++;
            }
        }

        double average = sum / 2.0;
        System.out.printf("media = %.2f%n", average);

        sc.close();
    }
}
