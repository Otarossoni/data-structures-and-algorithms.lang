// https://judge.beecrowd.com/pt/problems/view/1014
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int distancia = sc.nextInt();
        double combustivel = sc.nextDouble();

        double consumo = distancia / combustivel;
        System.out.printf("%.3f km/l%n", consumo);
        
        sc.close();
    }
}
