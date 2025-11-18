// https://judge.beecrowd.com/pt/problems/view/1074
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            int v = sc.nextInt();

            if (v == 0) {
                System.out.println("NULL");
            } else {
                String tipo = (v % 2 == 0) ? "EVEN" : "ODD";
                String sinal = (v > 0) ? "POSITIVE" : "NEGATIVE";
                System.out.println(tipo + " " + sinal);
            }
        }
    }
}
