// https://judge.beecrowd.com/pt/problems/view/1009
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String name = sc.next();
        double base = sc.nextDouble();
        double sales = sc.nextDouble();

        double total = base + sales * 0.15;
        System.out.printf("TOTAL = R$ %.2f%n", total);
        
        sc.close();
    }
}
