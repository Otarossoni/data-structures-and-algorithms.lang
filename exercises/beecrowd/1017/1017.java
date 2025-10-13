// https://judge.beecrowd.com/pt/problems/view/1017
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int time = sc.nextInt();
        int speed = sc.nextInt();

        double distance = time * speed;
        double liters = distance / 12.0;

        System.out.printf("%.3f%n", liters);

        sc.close();
    }
}
