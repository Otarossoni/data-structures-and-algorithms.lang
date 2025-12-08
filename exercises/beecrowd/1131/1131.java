// https://judge.beecrowd.com/pt/problems/view/1131
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int totalGames = 0;
        int interWins = 0;
        int gremioWins = 0;
        int draws = 0;

        while (true) {
            int interGoals = sc.nextInt();
            int gremioGoals = sc.nextInt();

            totalGames++;

            if (interGoals > gremioGoals) {
                interWins++;
            } else if (gremioGoals > interGoals) {
                gremioWins++;
            } else {
                draws++;
            }

            System.out.println("Novo grenal (1-sim 2-nao)");
            int option = sc.nextInt();

            if (option == 2) {
                break;
            }
        }

        System.out.println(totalGames + " grenais");
        System.out.println("Inter:" + interWins);
        System.out.println("Gremio:" + gremioWins);
        System.out.println("Empates:" + draws);

        if (interWins > gremioWins) {
            System.out.println("Inter venceu mais");
        } else if (gremioWins > interWins) {
            System.out.println("Gremio venceu mais");
        } else {
            System.out.println("Nao houve vencedor");
        }

        sc.close();
    }
}
