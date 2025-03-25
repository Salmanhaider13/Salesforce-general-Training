import java.util.Scanner;

public class Task5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter rows for pattern(n): ");
        int n = sc.nextInt();
        for (int i = 1; i < n*2; i++) {
            for (int j = 1; j < n*2; j++) {
                if ((i==n||j==n)||(i<=n&&j==1)||(i>n&&j==n*2-1)||(j<=n&&i==n*2-1)||(j>n&&i==1)) {
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
