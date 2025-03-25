import java.util.Scanner;

public class Task4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter rows for pattern(n) : ");
        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                if (i == n - 1 || j == 0 || i == j) {
                    System.out.print("* ");
                    continue;
                }
                System.out.print("  ");

            }
            System.out.println("");
        }
        sc.close();
    }
}
