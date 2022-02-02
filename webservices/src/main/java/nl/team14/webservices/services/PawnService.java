package nl.team14.webservices.services;

import java.util.List;
import java.util.stream.Collectors;

import nl.team14.webservices.dto.PawnDTO;
import nl.team14.webservices.model.Pawn;
import nl.team14.webservices.model.Player;
import nl.team14.webservices.repository.PawnRepository;
import nl.team14.webservices.repository.PlayerRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
public class PawnService {

    private final PawnRepository pawnRepository;
    private final PlayerRepository playerRepository;

    public PawnService(final PawnRepository pawnRepository,
            final PlayerRepository playerRepository) {
        this.pawnRepository = pawnRepository;
        this.playerRepository = playerRepository;
    }

    public List<PawnDTO> findAll() {
        return pawnRepository.findAll()
                .stream()
                .map(pawn -> mapToDTO(pawn, new PawnDTO()))
                .collect(Collectors.toList());
    }

    public PawnDTO get(final Long id) {
        return pawnRepository.findById(id)
                .map(pawn -> mapToDTO(pawn, new PawnDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final PawnDTO pawnDTO) {
        final Pawn pawn = new Pawn();
        mapToEntity(pawnDTO, pawn);
        return pawnRepository.save(pawn).getId();
    }

    public void update(final Long id, final PawnDTO pawnDTO) {
        final Pawn pawn = pawnRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(pawnDTO, pawn);
        pawnRepository.save(pawn);
    }

    public void delete(final Long id) {
        pawnRepository.deleteById(id);
    }

    private PawnDTO mapToDTO(final Pawn pawn, final PawnDTO pawnDTO) {
        pawnDTO.setId(pawn.getId());
        pawnDTO.setSaved(pawn.getSaved());
        pawnDTO.setClickable(pawn.getClickable());
        pawnDTO.setNextPositionIndex(pawn.getNextPositionIndex());
        pawnDTO.setPlayerHasPawns(pawn.getPlayerHasPawns() == null ? null : pawn.getPlayerHasPawns().getId());
        return pawnDTO;
    }

    private Pawn mapToEntity(final PawnDTO pawnDTO, final Pawn pawn) {
        pawn.setSaved(pawnDTO.getSaved());
        pawn.setClickable(pawnDTO.getClickable());
        pawn.setNextPositionIndex(pawnDTO.getNextPositionIndex());
        if (pawnDTO.getPlayerHasPawns() != null && (pawn.getPlayerHasPawns() == null || !pawn.getPlayerHasPawns().getId().equals(pawnDTO.getPlayerHasPawns()))) {
            final Player playerHasPawns = playerRepository.findById(pawnDTO.getPlayerHasPawns())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "playerHasPawns not found"));
            pawn.setPlayerHasPawns(playerHasPawns);
        }
        return pawn;
    }

}
