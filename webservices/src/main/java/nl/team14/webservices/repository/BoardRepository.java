package nl.team14.webservices.repository;


import nl.team14.webservices.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BoardRepository extends JpaRepository<Board, Long> {
}
