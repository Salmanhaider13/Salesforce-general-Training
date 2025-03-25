import java.util.Scanner;

public class Task11 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter rows for pattern(n): ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print("  ");
            }

            for (int j = 1; j <= i*2-1 ; j++) {
                if (j%2==1){
                    System.out.print("*");
                }
                else {
                    System.out.print(" "+(i-1)+" ");
                }
            }
            
            System.out.println();
        }
        for (int i = 2; i <= n; i++) {
            for (int j = 2; j <=i; j++) {
                System.out.print("  ");
            }
            
            for (int j = 1; j <= (n-i)*2+1 ; j++) {
                if (j%2==1){
                    System.out.print("*");
                }
                else {
                    System.out.print(" "+(n-i)+" ");
                }
            }

            System.out.println();
        }
        sc.close();
    }
}