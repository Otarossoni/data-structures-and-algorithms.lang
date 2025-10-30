// https://judge.beecrowd.com/pt/problems/view/1045
import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double[] sides = { sc.nextDouble(), sc.nextDouble(), sc.nextDouble() };
        Arrays.sort(sides);
        double a = sides[2], b = sides[1], c = sides[0];

        if (a >= b + c) {
            System.out.println("NAO FORMA TRIANGULO");
        } else {
            double a2 = a * a, b2 = b * b, c2 = c * c;

            if (a2 == b2 + c2) System.out.println("TRIANGULO RETANGULO");
            if (a2 > b2 + c2) System.out.println("TRIANGULO OBTUSANGULO");
            if (a2 < b2 + c2) System.out.println("TRIANGULO ACUTANGULO");
            if (a == b && b == c) System.out.println("TRIANGULO EQUILATERO");
            else if (a == b || a == c || b == c) System.out.println("TRIANGULO ISOSCELES");
        }

        sc.close();
    }
}
