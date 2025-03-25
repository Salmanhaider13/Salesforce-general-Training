import java.util.Scanner;

public class Task6 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter rows for pattern(n): ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for(int j = 1;j<n*2;j++){
                if ((i+j==n+1)||(i+j==2*n)||(j<=n&&i==n)||(j>n&&i==1)) {
                    System.out.print("* ");
                    continue;
                }
                System.out.print("  ");
            }
            System.out.println();
        }
        sc.close();
    }
}