// https://judge.beecrowd.com/pt/problems/view/1047
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int startH = sc.nextInt();
        int startM = sc.nextInt();
        int endH = sc.nextInt();
        int endM = sc.nextInt();

        int startTotal = startH * 60 + startM;
        int endTotal = endH * 60 + endM;

        int duration = endTotal - startTotal;
        if (duration <= 0) duration += 24 * 60;

        int hours = duration / 60;
        int minutes = duration % 60;

        System.out.printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)%n", hours, minutes);

        sc.close();
    }
}
