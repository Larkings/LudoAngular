package nl.team14.webservices.repository;

import nl.team14.webservices.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PlayerRepository extends JpaRepository<Player, Long> {
}
