// https://judge.beecrowd.com/pt/problems/view/1099
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            int x = sc.nextInt();
            int y = sc.nextInt();

            if (x > y) {
                int aux = x;
                x = y;
                y = aux;
            }

            int soma = 0;
            for (int v = x + 1; v < y; v++) {
                if (v % 2 != 0) {
                    soma += v;
                }
            }

            System.out.println(soma);
        }

        sc.close();
    }
}
