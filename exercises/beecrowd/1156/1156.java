// https://judge.beecrowd.com/pt/problems/view/1156
public class Main {
    public static void main(String[] args) {
        double s = 0, den = 1;

        for (int i = 1; i <= 39; i += 2) {
            s += i / den;
            den *= 2;
        }

        System.out.printf("%.2f\n", s);
    }
}
