// https://judge.beecrowd.com/pt/problems/view/1037
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double value = sc.nextDouble();

        if (value < 0 || value > 100) {
            System.out.println("Fora de intervalo");
        } else if (value <= 25) {
            System.out.println("Intervalo [0,25]");
        } else if (value <= 50) {
            System.out.println("Intervalo (25,50]");
        } else if (value <= 75) {
            System.out.println("Intervalo (50,75]");
        } else {
            System.out.println("Intervalo (75,100]");
        }

        sc.close();
    }
}
