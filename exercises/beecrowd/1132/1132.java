// https://judge.beecrowd.com/pt/problems/view/1132
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();
        int y = sc.nextInt();

        if (x > y) {
            int temp = x;
            x = y;
            y = temp;
        }

        int sum = 0;

        for (int i = x; i <= y; i++) {
            if (i % 13 != 0) {
                sum += i;
            }
        }

        System.out.println(sum);

        sc.close();
    }
}
