import java.util.Scanner;

class Task1{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String str=sc.nextLine();
        String arr[]=str.split("[\s+]");
        str="";
        for(String s:arr){
            str+=s;
        }
        System.out.println(str);
        sc.close();
    }
}