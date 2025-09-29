// https://judge.beecrowd.com/pt/problems/view/1010
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int code1 = sc.nextInt();
        int qty1 = sc.nextInt();
        double price1 = sc.nextDouble();
        int code2 = sc.nextInt();
        int qty2 = sc.nextInt();
        double price2 = sc.nextDouble();

        double total = qty1 * price1 + qty2 * price2;
        System.out.printf("VALOR A PAGAR: R$ %.2f%n", total);

        sc.close();
    }
}
