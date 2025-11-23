// https://judge.beecrowd.com/pt/problems/view/1094
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int total = 0;
        int coelhos = 0, ratos = 0, sapos = 0;

        for (int i = 0; i < n; i++) {
            int qtd = sc.nextInt();
            char tipo = sc.next().charAt(0);

            total += qtd;

            if (tipo == 'C') coelhos += qtd;
            else if (tipo == 'R') ratos += qtd;
            else if (tipo == 'S') sapos += qtd;
        }

        System.out.println("Total: " + total + " cobaias");
        System.out.println("Total de coelhos: " + coelhos);
        System.out.println("Total de ratos: " + ratos);
        System.out.println("Total de sapos: " + sapos);

        System.out.printf("Percentual de coelhos: %.2f %%\n", (coelhos * 100.0) / total);
        System.out.printf("Percentual de ratos: %.2f %%\n", (ratos * 100.0) / total);
        System.out.printf("Percentual de sapos: %.2f %%\n", (sapos * 100.0) / total);
    }
}
