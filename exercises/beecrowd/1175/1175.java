// https://judge.beecrowd.com/pt/problems/view/1175
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] arr = new int[20];

        for (int i = 0; i < 20; i++)
            arr[i] = sc.nextInt();

        for (int i = 0; i < 10; i++) {
            int temp = arr[i];
            arr[i] = arr[19 - i];
            arr[19 - i] = temp;
        }

        for (int i = 0; i < 20; i++)
            System.out.println("N[" + i + "] = " + arr[i]);

        sc.close();
    }
}
