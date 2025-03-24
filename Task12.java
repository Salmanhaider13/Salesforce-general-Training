public class Task12 {
    public static void main(String[] args) {

        StringBuffer sb = new StringBuffer("Hello, World!");
        System.out.println("StringBuffer : "+sb.toString());

        sb.setLength(0);//set the length of Stringbuffer to 0.
        System.out.println("StringBuffer : "+sb.toString());
        
        sb.append(new String("Second Time"));
        System.out.println("StringBuffer : "+sb.toString());
        
        sb.delete(0, sb.length());
        System.out.println("StringBuffer : "+sb.toString());

    }   
}