// https://judge.beecrowd.com/pt/problems/view/1060
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = 0;

        for (int i = 0; i < 6; i++) {
            if (sc.nextDouble() > 0) count++;
        }

        System.out.println(count + " valores positivos");
    }
}
