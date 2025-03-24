public class Task6{
    public static void main(String[] args) {
        Child c1=new Child();
        c1.speak("Hello");
        c1.laugh();
        c1.sing();
        System.out.println("Assests are worth of "+c1.assests);
    }
}


class GrandParent{
    int assests=2000000;
    void speak(String who,String s){
        System.out.println(who+" says : "+s);
    }
}

class Parent extends GrandParent{
    void laugh(){
        System.out.println("ha ha ha ha");
    }
}

class Child extends Parent{

    void speak(String s){
        super.speak("Child", s);
    }

    void sing(){
        System.out.println("I am singing");
    }
}