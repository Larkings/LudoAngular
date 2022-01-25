package nl.team14.webservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class WebservicesApplication {

    public static void main(String[] args) {

//        BinarySearchImpl binarySearch = new BinarySearchImpl(new QuickSortAlogorithm());

        ConfigurableApplicationContext applicationContext
                = SpringApplication.run(WebservicesApplication.class, args);
       BinarySearchImpl binarySearch = applicationContext.getBean(BinarySearchImpl.class);
        int result = binarySearch.binarySearch(new int[] {12, 4, 6}, 3);
        System.out.println(result);
    }

}
