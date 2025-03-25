import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;

public class Task2 {
    public static void main(String[] args) {
        ArrayList<Character> characters = new ArrayList<>(Arrays.asList('z', 'Y', 'B', 'a', 'C', 'x', 'A'));

        characters.sort(new Comparator<Character>() {
            public int compare(Character c1, Character c2) {
                int result = Character.toLowerCase(c1) - Character.toLowerCase(c2);

                if (result == 0) {
                    result = c1 - c2; 
                }
                return result;
            }
        });

        System.out.println(characters);
    }
}
