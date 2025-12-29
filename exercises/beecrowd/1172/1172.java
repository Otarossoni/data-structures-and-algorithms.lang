// https://judge.beecrowd.com/pt/problems/view/1172
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] arr = new int[10];

        for (int i = 0; i < 10; i++) {
            int value = sc.nextInt();
            if (value <= 0) value = 1;
            arr[i] = value;
        }

        for (int i = 0; i < 10; i++)
            System.out.println("X[" + i + "] = " + arr[i]);

        sc.close();
    }
}
