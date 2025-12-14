// https://judge.beecrowd.com/pt/problems/view/1145
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();
        int y = sc.nextInt();

        for(int i = 1; i <= y; i++){
            if(i % x == 0) System.out.println(i);
            else System.out.print(i + " ");
        }

        sc.close();
    }
}
