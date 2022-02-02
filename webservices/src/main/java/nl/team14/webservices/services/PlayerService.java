package nl.team14.webservices.services;

import java.util.List;
import java.util.stream.Collectors;
import nl.team14.webservices.dto.PlayerDTO;
import nl.team14.webservices.model.Board;
import nl.team14.webservices.model.Player;
import nl.team14.webservices.repository.BoardRepository;
import nl.team14.webservices.repository.PlayerRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
public class PlayerService {

    private final PlayerRepository playerRepository;
    private final BoardRepository boardRepository;

    public PlayerService(final PlayerRepository playerRepository,
            final BoardRepository boardRepository) {
        this.playerRepository = playerRepository;
        this.boardRepository = boardRepository;
    }

    public List<PlayerDTO> findAll() {
        return playerRepository.findAll()
                .stream()
                .map(player -> mapToDTO(player, new PlayerDTO()))
                .collect(Collectors.toList());
    }

    public PlayerDTO get(final Long id) {
        return playerRepository.findById(id)
                .map(player -> mapToDTO(player, new PlayerDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final PlayerDTO playerDTO) {
        final Player player = new Player();
        mapToEntity(playerDTO, player);
        return playerRepository.save(player).getId();
    }

    public void update(final Long id, final PlayerDTO playerDTO) {
        final Player player = playerRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(playerDTO, player);
        playerRepository.save(player);
    }

    public void delete(final Long id) {
        playerRepository.deleteById(id);
    }

    private PlayerDTO mapToDTO(final Player player, final PlayerDTO playerDTO) {
        playerDTO.setId(player.getId());
        playerDTO.setPlayerId(player.getPlayerId());
        playerDTO.setName(player.getName());
        playerDTO.setPlayerNumber(player.getPlayerNumber());
        playerDTO.setStartPosition(player.getStartPosition());
        playerDTO.setIsNext(player.getIsNext());
        playerDTO.setIsWinner(player.getIsWinner());
        playerDTO.setPlaysOn(player.getPlaysOn() == null ? null : player.getPlaysOn().getId());
        return playerDTO;
    }

    private Player mapToEntity(final PlayerDTO playerDTO, final Player player) {
        player.setPlayerId(playerDTO.getPlayerId());
        player.setName(playerDTO.getName());
        player.setPlayerNumber(playerDTO.getPlayerNumber());
        player.setStartPosition(playerDTO.getStartPosition());
        player.setIsNext(playerDTO.getIsNext());
        player.setIsWinner(playerDTO.getIsWinner());
        if (playerDTO.getPlaysOn() != null && (player.getPlaysOn() == null || !player.getPlaysOn().getId().equals(playerDTO.getPlaysOn()))) {
            final Board playsOn = boardRepository.findById(playerDTO.getPlaysOn())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "playsOn not found"));
            player.setPlaysOn(playsOn);
        }
        return player;
    }

}
