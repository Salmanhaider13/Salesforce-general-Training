import java.util.Scanner;

public class Task12 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter Your String : ");
        String str=sc.nextLine();
        String arr[]=str.split(" ");
        String reversedStr="";
        for (int i =arr.length-1;i>=0;i--) {
            reversedStr+=arr[i]+" ";
        }
        System.out.println("Reversed String : "+reversedStr);
    }    
}
