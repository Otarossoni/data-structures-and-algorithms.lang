// https://judge.beecrowd.com/pt/problems/view/1134
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int alcohol = 0, gasoline = 0, diesel = 0;

        while (true) {
            int code = sc.nextInt();

            if (code == 1) alcohol++;
            else if (code == 2) gasoline++;
            else if (code == 3) diesel++;
            else if (code == 4) break;
        }

        System.out.println("MUITO OBRIGADO");
        System.out.println("Alcool: " + alcohol);
        System.out.println("Gasolina: " + gasoline);
        System.out.println("Diesel: " + diesel);

        sc.close();
    }
}
