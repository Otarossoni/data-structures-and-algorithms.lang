// https://judge.beecrowd.com/pt/problems/view/1180
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        int min = Integer.MAX_VALUE;
        int pos = 0;

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            if (arr[i] < min) {
                min = arr[i];
                pos = i;
            }
        }

        System.out.println("Menor valor: " + min);
        System.out.println("Posicao: " + pos);

        sc.close();
    }
}
