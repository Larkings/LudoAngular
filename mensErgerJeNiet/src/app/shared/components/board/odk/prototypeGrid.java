package gridLudo.odk;
import javax.swing.*;
import java.awt.*;

public class prototypeGrid extends JPanel {


    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        final int x1 = 0, y1 = 0, a = 23, n =23;
        //Make Lines and BG White
/*        g.setColor(Color.white);
        setBackground(Color.white);*/

        for (int i = 0; i <=n; i++) {
            g.drawLine(x1, y1 + i * a, x1 + n * a, y1+i * a);
            g.drawLine(x1 + i * a, y1, x1 + i * a, y1 + n * a);

        }

        //HOME BASE

        for(int i=0; i<=6;i++){
          g.setColor(Color.RED);
          g.fillRect(x1 + 23 * i + (23 *3) ,y1 + (23 *3),23,23 * 7);
      }

        for(int i=0; i<=6;i++){
            g.setColor(Color.YELLOW);
            g.fillRect(x1 + 23 * i + (23 *3),y1 + (23 * 13) ,23,23 * 7);
        }

        for(int i=0; i<=6;i++){
            g.setColor(Color.BLUE);
            g.fillRect(x1 + 23 * i + (23 *13),y1 + (23 * 3) ,23,23 * 7);
        }

        for(int i=0; i<=6;i++){
            g.setColor(Color.GREEN);
            g.fillRect(x1 + 23 * i + (23 *13),y1 + (23 * 13) ,23,23 * 7);
        }


        //FINISH BASE
        for(int i=0; i<=2;i++){
            g.setColor(Color.ORANGE);
            g.fillRect(x1 + 23 * i + (23 *10),y1 + (23 * 10) ,23,23 * 3);
        }

        //STARTPOINTS

        for(int i=0; i<=0;i++){
            g.setColor(Color.RED);
            g.fillRect(x1 + 23 * i + (23 *4) ,y1 + (23 *10),23,23);
        }

        for(int i=0; i<=0;i++){
            g.setColor(Color.YELLOW);
            g.fillRect(x1 + 23 * i + (23 *10) ,y1 + (23 *18),23,23);
        }

        for(int i=0; i<=0;i++){
            g.setColor(Color.BLUE);
            g.fillRect(x1 + 23 * i + (23 *12) ,y1 + (23 *4),23,23);
        }

        for(int i=0; i<=0;i++){
            g.setColor(Color.GREEN);
            g.fillRect(x1 + 23 * i + (23 *18) ,y1 + (23 *12),23,23);
        }

        //WINNING PATHS

        for(int i=0; i<=0;i++){
            g.setColor(Color.RED);
            g.fillRect(x1 + 23 * i + (23 *4) ,y1 + (23 *11),23 * 6,23);
        }

        for(int i=0; i<=0;i++){
            g.setColor(Color.YELLOW);
            g.fillRect(x1 + 23 * i + (23 *11) ,y1 + (23 *13),23,23* 6);
        }

        for(int i=0; i<=0;i++){
            g.setColor(Color.BLUE);
            g.fillRect(x1 + 23 * i + (23 *11) ,y1 + (23 *4),23,23 * 6);
        }

        for(int i=0; i<=0;i++){
            g.setColor(Color.GREEN);
            g.fillRect(x1 + 23 * i + (23 *13) ,y1 + (23 *11),23 * 6,23);
        }


    }
}
