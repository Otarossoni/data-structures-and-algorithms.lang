// https://judge.beecrowd.com/pt/problems/view/1048
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double salary = sc.nextDouble();
        double percentage;

        if (salary <= 400.00) percentage = 15;
        else if (salary <= 800.00) percentage = 12;
        else if (salary <= 1200.00) percentage = 10;
        else if (salary <= 2000.00) percentage = 7;
        else percentage = 4;

        double raise = salary * percentage / 100.0;
        double newSalary = salary + raise;

        System.out.printf("Novo salario: %.2f%n", newSalary);
        System.out.printf("Reajuste ganho: %.2f%n", raise);
        System.out.printf("Em percentual: %.0f %%\n", percentage);

        sc.close();
    }
}
