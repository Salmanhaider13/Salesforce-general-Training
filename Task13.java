import java.util.Scanner;

public class Task13 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Cipher c1 = new Cipher("Salman");
        System.out.println(c1.encrypt());
        System.out.println(c1.decrypt());
    }
}

class Cipher {
    String str;
    private int key = 0;

    public Cipher(String str) {
        this.str = str;
        for (char c : str.toCharArray()) {
            key += (int) c;
        }
        key /= str.length();
        System.out.println(key);
    }

    public String encrypt() {
        String encrypt = "";
        for (char c : this.str.toCharArray()) {
            encrypt += (char) (c + key);
        }
        str = encrypt;
        return encrypt;
    }

    public String decrypt() {
        String decrypt = "";
        for (char c : this.str.toCharArray()) {
            decrypt += (char) (c - key);
        }
        str = decrypt;
        return decrypt;
    }
}