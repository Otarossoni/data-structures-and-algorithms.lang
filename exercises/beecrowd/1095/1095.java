// https://judge.beecrowd.com/pt/problems/view/1095
public class Main {
    public static void main(String[] args) {
        int I = 1;
        int J = 60;

        while (J >= 0) {
            System.out.println("I=" + I + " J=" + J);
            I += 3;
            J -= 5;
        }
    }
}
