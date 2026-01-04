// https://judge.beecrowd.com/pt/problems/view/1178
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double x = sc.nextDouble();
        double[] arr = new double[100];

        arr[0] = x;
        for (int i = 1; i < 100; i++)
            arr[i] = arr[i - 1] / 2.0;

        for (int i = 0; i < 100; i++)
            System.out.printf("N[%d] = %.4f\n", i, arr[i]);

        sc.close();
    }
}
