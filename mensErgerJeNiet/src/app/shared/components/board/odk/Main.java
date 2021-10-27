package gridLudo.odk;

import javax.swing.*;

public class Main extends JFrame{
    public Main(){
        prototypeGrid firstGrid = new prototypeGrid();
        add(firstGrid);
        pack();
    }

    public static void main(String[] args) {
        new Main().setVisible(true);

    }
}

