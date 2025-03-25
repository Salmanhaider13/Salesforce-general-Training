import java.util.Scanner;

public class Task13 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter num1 : ");
        int num1 = sc.nextInt();
        System.out.print("Enter num2 : ");
        int num2 = sc.nextInt();
        
        if(num2>num1){
            System.out.println("num2 cannot be greater than num1");
            System.out.print("Enter num1 : ");
            num1 = sc.nextInt();
            System.out.print("Enter num2 : ");
            num2 = sc.nextInt();
        }

        System.out.println("Permutataion is : "+(factorial(num1)/factorial(num1-num2)));
        System.out.println("Combination is : "+(factorial(num1)/(factorial(num1-num2)*factorial(num2))));

    }

    static int factorial(int num) {
        if (num == 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }
}
