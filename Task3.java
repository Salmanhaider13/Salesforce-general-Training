import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;

public class Task3 {
    public static void main(String[] args) {
        ArrayList<Integer> list=new ArrayList<>(Arrays.asList(98,32,72,94,75,73,92,36,28,34));
        System.out.println("Original List: "+list);
        list.sort(Comparator.reverseOrder());
        System.out.println("Second Largest Number is : "+list.get(1));
    }
}
