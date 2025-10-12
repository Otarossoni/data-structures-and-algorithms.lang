// https://judge.beecrowd.com/pt/problems/view/1016
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int minutos = 2 * x;
        System.out.println(minutos + " minutos");
        sc.close();
    }
}
