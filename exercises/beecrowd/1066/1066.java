// https://judge.beecrowd.com/pt/problems/view/1066
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int pares = 0, impares = 0, pos = 0, neg = 0;

        for (int i = 0; i < 5; i++) {
            int v = sc.nextInt();
            if (v % 2 == 0) pares++;
            else impares++;
            if (v > 0) pos++;
            else if (v < 0) neg++;
        }

        System.out.println(pares + " valor(es) par(es)");
        System.out.println(impares + " valor(es) impar(es)");
        System.out.println(pos + " valor(es) positivo(s)");
        System.out.println(neg + " valor(es) negativo(s)");
    }
}
