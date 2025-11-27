// https://judge.beecrowd.com/pt/problems/view/1098
public class Main {
    public static void main(String[] args) {

        double I = 0;

        while (I <= 2.0 + 1e-9) {
            for (double J = 1; J <= 3; J++) {

                double vI = Math.round(I * 10.0) / 10.0;
                double vJ = Math.round((J + I) * 10.0) / 10.0;

                if (vI == (int) vI) {
                    System.out.println("I=" + (int)vI + " J=" + (int)vJ);
                } else {
                    System.out.printf("I=%.1f J=%.1f\n", vI, vJ);
                }
            }
            I += 0.2;
        }
    }
}
