// https://judge.beecrowd.com/pt/problems/view/1065
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = 0;

        for (int i = 0; i < 5; i++) {
            if (sc.nextInt() % 2 == 0) count++;
        }

        System.out.println(count + " valores pares");
    }
}
