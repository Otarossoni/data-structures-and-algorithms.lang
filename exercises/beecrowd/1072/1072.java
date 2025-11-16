// https://judge.beecrowd.com/pt/problems/view/1072
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int in = 0, out = 0;

        for (int i = 0; i < n; i++) {
            int v = sc.nextInt();
            if (v >= 10 && v <= 20) in++;
            else out++;
        }

        System.out.println(in + " in");
        System.out.println(out + " out");
    }
}
