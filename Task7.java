import java.util.Scanner;

public class Task7 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter num1 : ");
        int num1=sc.nextInt();
        System.out.println("Enter num2 : ");
        int num2=sc.nextInt();

        System.out.println("Before Swapping : ");
        System.out.println("num1 = "+num1);
        System.out.println("num2 = "+num2);

        //first logic with addition and subtraction
        // num1=num2+num1;
        // num2=num1-num2;
        // num1=num1-num2;

        //second logic with XOR
        num1=num1^num2;
        num2=num1^num2;
        num1=num1^num2;

        System.out.println("After Swapping : ");
        System.out.println("num1 = "+num1);
        System.out.println("num2 = "+num2);
        sc.close();
    }
}
