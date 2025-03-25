import java.util.Scanner;

public class Task9 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter rows for pattern(n): ");
        int n = sc.nextInt();
        for (int i = 1; i < n*2; i++) {
            for(int j=1;j<n*2;j++){
                if(i==j||i+j==n*2||j==1||j==n*2-1){
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