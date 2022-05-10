package nl.team14.webservices;

import nl.team14.webservices.model.Board;
import nl.team14.webservices.repository.BoardRepository;
import nl.team14.webservices.repository.PawnRepository;
import nl.team14.webservices.repository.PlayerRepository;
import nl.team14.webservices.repository.PositionRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class WebservicesApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext configurableApplicationContext
                = SpringApplication.run(WebservicesApplication.class, args);
        configurableApplicationContext.getBean(BoardRepository.class);
        configurableApplicationContext.getBean(PawnRepository.class);
        configurableApplicationContext.getBean(PositionRepository.class);
        configurableApplicationContext.getBean(PlayerRepository.class);
        BoardRepository boardRepository = configurableApplicationContext.getBean(BoardRepository.class);
        Board board = new Board();
        boardRepository.save(board);

    }

}
