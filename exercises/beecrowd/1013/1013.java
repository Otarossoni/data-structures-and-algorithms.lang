// https://judge.beecrowd.com/pt/problems/view/1013
import java.util.Scanner;

public class Main {
    public static int max(int x, int y) {
        return (x > y) ? x : y;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        int maiorAB = max(a, b);
        int maior = max(maiorAB, c);
        System.out.println(maior + " eh o maior");

        sc.close();
    }
}
