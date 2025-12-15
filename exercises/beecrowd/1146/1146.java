// https://judge.beecrowd.com/pt/problems/view/1146
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            int x = sc.nextInt();
            if (x == 0) break;

            StringBuilder sb = new StringBuilder();

            for (int i = 1; i <= x; i++) {
                sb.append(i);
                if (i < x) sb.append(" ");
            }

            System.out.println(sb.toString());
        }

        sc.close();
    }
}
