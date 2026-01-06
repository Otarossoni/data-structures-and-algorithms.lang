// https://judge.beecrowd.com/pt/problems/view/1179
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] even = new int[5];
        int[] odd = new int[5];
        int e = 0, o = 0;

        for (int i = 0; i < 15; i++) {
            int value = sc.nextInt();

            if (value % 2 == 0) {
                even[e++] = value;
                if (e == 5) {
                    for (int j = 0; j < 5; j++)
                        System.out.println("par[" + j + "] = " + even[j]);
                    e = 0;
                }
            } else {
                odd[o++] = value;
                if (o == 5) {
                    for (int j = 0; j < 5; j++)
                        System.out.println("impar[" + j + "] = " + odd[j]);
                    o = 0;
                }
            }
        }

        for (int i = 0; i < o; i++) System.out.println("impar[" + i + "] = " + odd[i]);
        for (int i = 0; i < e; i++) System.out.println("par[" + i + "] = " + even[i]);

        sc.close();
    }
}
