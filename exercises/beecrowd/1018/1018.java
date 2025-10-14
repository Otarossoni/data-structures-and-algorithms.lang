// https://judge.beecrowd.com/pt/problems/view/1018
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int value = sc.nextInt();
        System.out.println(value);

        int[] notes = {100, 50, 20, 10, 5, 2, 1};

        for (int note : notes) {
            int quantity = value / note;
            System.out.println(quantity + " nota(s) de R$ " + note + ",00");
            value %= note;
        }

        sc.close();
    }
}
