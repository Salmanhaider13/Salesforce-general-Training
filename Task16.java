import java.util.Scanner;;

public class Task16 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter no of dice : ");
        int no_of_dice = sc.nextInt();
        System.out.print("Enter outcome : ");
        int outcome = sc.nextInt();
        countPossibility(no_of_dice, outcome);
        System.out.println("Output : " + count);
        sc.close();
    }

    static int count = 0;

    static void countPossibility(int no_of_dice, int outcome) {
        if (no_of_dice == 0) {
            if (outcome == 0) {
                count++;
            }
            return;
        }
        for (int i = 1; i <= 6; i++) {
            countPossibility(no_of_dice - 1, outcome - i);
        }
    }
}
