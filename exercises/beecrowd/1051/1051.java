// https://judge.beecrowd.com/pt/problems/view/1051
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double salary = sc.nextDouble();

        double tax = 0.0;

        if (salary <= 2000.00) {
            System.out.println("Isento");
        } else if (salary <= 3000.00) {
            tax = (salary - 2000.00) * 0.08;
            System.out.printf("R$ %.2f%n", tax);
        } else if (salary <= 4500.00) {
            tax = (1000.00 * 0.08) + ((salary - 3000.00) * 0.18);
            System.out.printf("R$ %.2f%n", tax);
        } else {
            tax = (1000.00 * 0.08) + (1500.00 * 0.18) + ((salary - 4500.00) * 0.28);
            System.out.printf("R$ %.2f%n", tax);
        }

        sc.close();
    }
}
