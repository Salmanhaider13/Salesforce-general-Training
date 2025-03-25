public class Task14 {
    public static void main(String[] args) {
        checkingException(null);
    }

    static void checkingException(String str){
        try{
            if(str==null){
                throw new NullPointerException();
            }
            System.out.println("Input is Not null");
        }
        catch(NullPointerException e){
            e.printStackTrace();
            System.out.println("Null Pointer Exception Occured!");
            
        }
    }
}
