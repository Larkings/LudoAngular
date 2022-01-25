package nl.team14.webservices;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class QuickSortAlogorithm implements SortAlgorithm{

    public int[] sort(int[] numbers){
        return numbers;
    }
}
