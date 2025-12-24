// https://judge.beecrowd.com/pt/problems/view/1158
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        while (n-- > 0) {
            int x = sc.nextInt();
            int y = sc.nextInt();
            int sum = 0;

            while (y > 0) {
                if (x % 2 != 0) {
                    sum += x;
                    y--;
                }
                x++;
            }

            System.out.println(sum);
        }
        sc.close();
    }
}
