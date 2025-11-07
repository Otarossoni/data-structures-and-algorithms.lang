// https://judge.beecrowd.com/pt/problems/view/1052
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int month = sc.nextInt();

        String[] months = {
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        };

        System.out.println(months[month - 1]);

        sc.close();
    }
}
