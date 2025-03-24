import java.util.Scanner;

public class Task10 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the Decimal number : ");
        double num=sc.nextDouble();
        if(num-(int)num!=0){
            String arr[]=Double.toString(num).split("[.]");
            Double newNum=Double.valueOf(arr[1]+reverse((int)num))/Math.pow(10, arr[1].length());
            System.out.println(newNum);
        }
        else{
            System.out.println("\u001B[31m"+"Warning : Enter a decimal number only".toUpperCase()+"\u001B[0m");
        }
    }
    static int reverse(int number){
        int reverse=0;
        while (number>0) {
            int digit=number%10;
            reverse=reverse*10+digit;
            number/=10;
        }
        return reverse;
    }
}
