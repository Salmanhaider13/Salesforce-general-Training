import java.util.ArrayList;
import java.util.Arrays;

public class Task8 {
    public static void main(String[] args) {
        ArrayList<Integer> numbers=new ArrayList<>(Arrays.asList(1,3));
        System.out.println(numbers+check(numbers));
        numbers.add(2);
        System.out.println(numbers+check(numbers));
    }

    static String check(ArrayList<Integer> numbers){
        for (Integer number : numbers) {
            if(number%2==0){
                return " Contains even numbers too!";
            }
        }
        return " Contains Only odd Numbers.";
    }
}
