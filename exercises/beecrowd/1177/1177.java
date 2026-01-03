// https://judge.beecrowd.com/pt/problems/view/1177
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();
        int[] arr = new int[1000];

        int index = 0;
        while (index < 1000)
            for (int i = 0; i < t && index < 1000; i++)
                arr[index++] = i;

        for (int i = 0; i < 1000; i++)
            System.out.println("N[" + i + "] = " + arr[i]);

        sc.close();
    }
}
