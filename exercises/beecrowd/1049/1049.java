// https://judge.beecrowd.com/pt/problems/view/1049
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String b = sc.next();
        String c = sc.next();

        if (a.equals("vertebrado")) {
            if (b.equals("ave")) {
                if (c.equals("carnivoro")) System.out.println("aguia");
                else System.out.println("pomba");
            } else {
                if (c.equals("onivoro")) System.out.println("homem");
                else System.out.println("vaca");
            }
        } else {
            if (b.equals("inseto")) {
                if (c.equals("hematofago")) System.out.println("pulga");
                else System.out.println("lagarta");
            } else {
                if (c.equals("hematofago")) System.out.println("sanguessuga");
                else System.out.println("minhoca");
            }
        }

        sc.close();
    }
}
