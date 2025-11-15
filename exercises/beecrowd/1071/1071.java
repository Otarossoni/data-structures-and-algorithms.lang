// https://judge.beecrowd.com/pt/problems/view/1071
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();
        int y = sc.nextInt();

        int inicio = Math.min(x, y) + 1;
        int fim = Math.max(x, y);

        int soma = 0;

        for (int i = inicio; i < fim; i++) {
            if (i % 2 != 0) soma += i;
        }

        System.out.println(soma);
    }
}
