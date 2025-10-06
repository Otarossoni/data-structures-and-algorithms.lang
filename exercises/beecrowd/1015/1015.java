// https://judge.beecrowd.com/pt/problems/view/1015
import java.util.Scanner;
import java.lang.Math;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        double x1 = sc.nextDouble();
        double y1 = sc.nextDouble();
        double x2 = sc.nextDouble();
        double y2 = sc.nextDouble();

        double diffX = x2 - x1;
        double diffY = y2 - y1;
        double powX = Math.pow(diffX, 2);
        double powY = Math.pow(diffY, 2);

        double distancia = Math.sqrt(powX + powY); 
        System.out.printf("%.4f\n", distancia);

        sc.close();
    }
}
