// https://judge.beecrowd.com/pt/problems/view/1150
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();
        int z;

        do { 
            z = sc.nextInt();
        } while(z <= x);

        int soma = 0, count = 0;
        
        for(int i = x; soma <= z; i++){
            soma += i;
            count++;
        }

        System.out.println(count);
        sc.close();
    }
}
