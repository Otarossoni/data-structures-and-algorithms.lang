// https://judge.beecrowd.com/pt/problems/view/1159
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            int x = sc.nextInt();
            if (x == 0) break;

            if (x % 2 != 0) x++; 
            int sum = 0;

            for (int i = 0; i < 5; i++)
                sum += x + 2 * i;

            System.out.println(sum);
        }

        sc.close();
    }
}
