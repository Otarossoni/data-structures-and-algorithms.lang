// https://judge.beecrowd.com/pt/problems/view/1097
public class Main {
    public static void main(String[] args) {
        int I = 1;
        int JInicio = 7;

        while (I <= 9) {
            int J = JInicio;
            for (int k = 0; k < 3; k++) {
                System.out.println("I=" + I + " J=" + J);
                J--;
            }
            I += 2;
            JInicio += 2;
        }
    }
}
