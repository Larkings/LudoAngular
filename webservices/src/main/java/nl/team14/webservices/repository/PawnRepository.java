package nl.team14.webservices.repository;


import nl.team14.webservices.model.Pawn;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PawnRepository extends JpaRepository<Pawn, Long> {
}
