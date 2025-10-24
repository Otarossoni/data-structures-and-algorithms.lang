// https://judge.beecrowd.com/pt/problems/view/1040
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double n1 = sc.nextDouble();
        double n2 = sc.nextDouble();
        double n3 = sc.nextDouble();
        double n4 = sc.nextDouble();

        double average = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10.0;
        average = Math.floor(average * 10 + 0.0001) / 10.0;

        System.out.printf("Media: %.1f%n", average);

        if (average >= 7.0) {
            System.out.println("Aluno aprovado.");
        } else if (average < 5.0) {
            System.out.println("Aluno reprovado.");
        } else {
            System.out.println("Aluno em exame.");
            double examScore = sc.nextDouble();
            System.out.printf("Nota do exame: %.1f%n", examScore);

            double finalAverage = (average + examScore) / 2.0;
            finalAverage = Math.floor(finalAverage * 10 + 0.0001) / 10.0;

            if (finalAverage >= 5.0) {
                System.out.println("Aluno aprovado.");
            } else {
                System.out.println("Aluno reprovado.");
            }

            System.out.printf("Media final: %.1f%n", finalAverage);
        }

        sc.close();
    }
}
