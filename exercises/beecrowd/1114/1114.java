// https://judge.beecrowd.com/pt/problems/view/1114
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            int password = sc.nextInt();

            if (password == 2002) {
                System.out.println("Acesso Permitido");
                break;
            } else {
                System.out.println("Senha Invalida");
            }
        }

        sc.close();
    }
}
