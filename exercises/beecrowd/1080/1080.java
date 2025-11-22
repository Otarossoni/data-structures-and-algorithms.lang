// https://judge.beecrowd.com/pt/problems/view/1080
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int maior = -1;
        int pos = 0;

        for (int i = 1; i <= 100; i++) {
            int v = sc.nextInt();
            if (v > maior) {
                maior = v;
                pos = i;
            }
        }

        System.out.println(maior);
        System.out.println(pos);
    }
}
