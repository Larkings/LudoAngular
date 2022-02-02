package nl.team14.webservices.repository;


import nl.team14.webservices.model.Position;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PositionRepository extends JpaRepository<Position, Long> {
}
