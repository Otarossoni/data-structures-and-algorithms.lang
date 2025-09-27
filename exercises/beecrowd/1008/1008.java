// https://judge.beecrowd.com/pt/problems/view/1008
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int number = sc.nextInt();
        int hours = sc.nextInt();
        double value = sc.nextDouble();

        double salary = hours * value;
        System.out.println("NUMBER = " + number);
        System.out.printf("SALARY = U$ %.2f%n", salary);
        
        sc.close();
    }
}
