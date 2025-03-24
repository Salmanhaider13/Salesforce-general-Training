public class Task11 {
    public static void main(String[] args) {
        Eagle e1 = new Eagle();
        e1.fly();
        e1.hunt("Eagle");
    }
}

interface Bird {
    void fly();
}

interface Predator {
    default void hunt(String name) {
        System.out.println(name + " is hunting");
    }
}

class Eagle implements Bird, Predator {

    public void fly() {
        System.out.println("Eagle is flying high in sky");
    }

}