// https://judge.beecrowd.com/pt/problems/view/1154
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int sum = 0, qtd = 0;

        while (true) {
            int x = sc.nextInt();
            if (x < 0) break;
            sum += x;
            qtd++;
        }

        System.out.printf("%.2f\n", sum / (double) qtd);
        sc.close();
    }
}
