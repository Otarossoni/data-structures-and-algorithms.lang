// https://judge.beecrowd.com/pt/problems/view/1061
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] diaInicio = sc.nextLine().split(" ");
        String[] hInicio = sc.nextLine().split(" : ");
        String[] diaFim = sc.nextLine().split(" ");
        String[] hFim = sc.nextLine().split(" : ");

        int di = Integer.parseInt(diaInicio[1]);
        int hi = Integer.parseInt(hInicio[0]);
        int mi = Integer.parseInt(hInicio[1]);
        int si = Integer.parseInt(hInicio[2]);

        int df = Integer.parseInt(diaFim[1]);
        int hf = Integer.parseInt(hFim[0]);
        int mf = Integer.parseInt(hFim[1]);
        int sf = Integer.parseInt(hFim[2]);

        int inicio = di*86400 + hi*3600 + mi*60 + si;
        int fim    = df*86400 + hf*3600 + mf*60 + sf;

        int dur = fim - inicio;

        int dias = dur / 86400; dur %= 86400;
        int horas = dur / 3600; dur %= 3600;
        int minutos = dur / 60;
        int segundos = dur % 60;

        System.out.println(dias + " dia(s)");
        System.out.println(horas + " hora(s)");
        System.out.println(minutos + " minuto(s)");
        System.out.println(segundos + " segundo(s)");
    }
}
