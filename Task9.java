import java.util.Scanner;

public class Task9 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter Input String : ");
        String str = sc.nextLine();
        System.out.print("Enter Input Number : ");
        int num= sc.nextInt();
        System.out.println("Output : "+str.split(" ")[num-1]);
    }    
}
