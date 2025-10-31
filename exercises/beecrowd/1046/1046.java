// https://judge.beecrowd.com/pt/problems/view/1046
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int start = sc.nextInt();
        int end = sc.nextInt();

        int duration = end - start;
        if (duration <= 0) duration += 24;

        System.out.printf("O JOGO DUROU %d HORA(S)%n", duration);

        sc.close();
    }
}
