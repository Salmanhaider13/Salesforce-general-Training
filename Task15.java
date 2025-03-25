import java.util.Scanner;

public class Task15 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the Number : ");
        int n=sc.nextInt();
        int tmp=n;
        int cnt=0;
        int sum=0;
        while (n>0) {
            n=n/10;
            cnt++;
        }
        n=tmp;
        while (n>0) {
            int rem=n%10;
            sum+=Math.pow(rem, cnt);
            n=n/10;
        }
        if(sum==tmp){
            System.out.println("Number is a Armstrong Number.");
        }
        else{
            System.out.println("Number is not a Armstrong Number.");
        }
        sc.close();
    }
}
