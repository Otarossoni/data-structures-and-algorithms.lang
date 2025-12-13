// https://judge.beecrowd.com/pt/problems/view/1144
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        for(int i = 1; i <= n; i++){
            System.out.printf("%d %d %d\n", i, i*i, i*i*i);
            System.out.printf("%d %d %d\n", i, i*i+1, i*i*i+1);
        }

        sc.close();
    }
}
