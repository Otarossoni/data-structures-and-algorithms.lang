// https://judge.beecrowd.com/pt/problems/view/1120
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            String digit = sc.next();
            String number = sc.next();

            if (digit.equals("0") && number.equals("0")) {
                break;
            }

            String result = "";

            for (int i = 0; i < number.length(); i++) {
                if (number.charAt(i) != digit.charAt(0)) {
                    result += number.charAt(i);
                }
            }

            int index = 0;
            while (index < result.length() && result.charAt(index) == '0') {
                index++;
            }

            result = result.substring(index);

            if (result.equals("")) {
                System.out.println("0");
            } else {
                System.out.println(result);
            }
        }

        sc.close();
    }
}
