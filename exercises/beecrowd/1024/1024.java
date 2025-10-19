// https://judge.beecrowd.com/pt/problems/view/1024
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());

        for (int i = 0; i < n; i++) {
            String text = sc.nextLine();
            StringBuilder firstPass = new StringBuilder();

            for (char c : text.toCharArray()) {
                if (Character.isLetter(c)) {
                    firstPass.append((char) (c + 3));
                } else {
                    firstPass.append(c);
                }
            }

            String reversed = firstPass.reverse().toString();

            char[] chars = reversed.toCharArray();
            for (int j = chars.length / 2; j < chars.length; j++) {
                chars[j] = (char) (chars[j] - 1);
            }

            System.out.println(new String(chars));
        }

        sc.close();
    }
}
