// https://judge.beecrowd.com/pt/problems/view/1021
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double amount = sc.nextDouble();

        int cents = (int) Math.round(amount * 100);

        int[] bills = {10000, 5000, 2000, 1000, 500, 200};
        int[] coins = {100, 50, 25, 10, 5, 1};

        System.out.println("NOTAS:");
        for (int bill : bills) {
            int count = cents / bill;
            cents %= bill;
            System.out.printf("%d nota(s) de R$ %.2f%n", count, bill / 100.0);
        }

        System.out.println("MOEDAS:");
        for (int coin : coins) {
            int count = cents / coin;
            cents %= coin;
            System.out.printf("%d moeda(s) de R$ %.2f%n", count, coin / 100.0);
        }

        sc.close();
    }
}
