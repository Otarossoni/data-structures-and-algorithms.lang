// https://judge.beecrowd.com/pt/problems/view/1173
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int value = sc.nextInt();
        int[] arr = new int[10];

        arr[0] = value;
        for (int i = 1; i < 10; i++)
            arr[i] = arr[i - 1] * 2;

        for (int i = 0; i < 10; i++)
            System.out.println("N[" + i + "] = " + arr[i]);

        sc.close();
    }
}
