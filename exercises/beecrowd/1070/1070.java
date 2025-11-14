// https://judge.beecrowd.com/pt/problems/view/1070
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int count = 0;

        while (count < 6) {
            if (x % 2 != 0) {
                System.out.println(x);
                count++;
            }
            x++;
        }
    }
}
