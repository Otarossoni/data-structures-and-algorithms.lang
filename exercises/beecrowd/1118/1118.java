// https://judge.beecrowd.com/pt/problems/view/1118
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
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

            int option;
            while (true) {
                System.out.println("novo calculo (1-sim 2-nao)");
                option = sc.nextInt();

                if (option == 1 || option == 2) {
                    break;
                }
            }

            if (option == 2) {
                break;
            }
        }

        sc.close();
    }
}
