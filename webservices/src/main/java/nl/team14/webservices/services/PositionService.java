package nl.team14.webservices.services;


import java.util.List;
import java.util.stream.Collectors;

import nl.team14.webservices.dto.PositionDTO;
import nl.team14.webservices.model.Board;
import nl.team14.webservices.model.Position;
import nl.team14.webservices.repository.BoardRepository;
import nl.team14.webservices.repository.PositionRepository;
import org.springframework.http.HttpStatus;;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
public class PositionService {

    private final PositionRepository positionRepository;
    private final BoardRepository boardRepository;

    public PositionService(final PositionRepository positionRepository,
            final BoardRepository boardRepository) {
        this.positionRepository = positionRepository;
        this.boardRepository = boardRepository;
    }

    public List<PositionDTO> findAll() {
        return positionRepository.findAll()
                .stream()
                .map(position -> mapToDTO(position, new PositionDTO()))
                .collect(Collectors.toList());
    }

    public PositionDTO get(final Long id) {
        return positionRepository.findById(id)
                .map(position -> mapToDTO(position, new PositionDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final PositionDTO positionDTO) {
        final Position position = new Position();
        mapToEntity(positionDTO, position);
        return positionRepository.save(position).getId();
    }

    public void update(final Long id, final PositionDTO positionDTO) {
        final Position position = positionRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(positionDTO, position);
        positionRepository.save(position);
    }

    public void delete(final Long id) {
        positionRepository.deleteById(id);
    }

    private PositionDTO mapToDTO(final Position position, final PositionDTO positionDTO) {
        positionDTO.setId(position.getId());
        positionDTO.setX(position.getX());
        positionDTO.setY(position.getY());
        positionDTO.setHasPawn(position.getHasPawn());
        positionDTO.setBoardPostions(position.getBoardPostions() == null ? null : position.getBoardPostions().getId());
        return positionDTO;
    }

    private Position mapToEntity(final PositionDTO positionDTO, final Position position) {
        position.setX(positionDTO.getX());
        position.setY(positionDTO.getY());
        position.setHasPawn(positionDTO.getHasPawn());
        if (positionDTO.getBoardPostions() != null && (position.getBoardPostions() == null || !position.getBoardPostions().getId().equals(positionDTO.getBoardPostions()))) {
            final Board boardPostions = boardRepository.findById(positionDTO.getBoardPostions())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "boardPostions not found"));
            position.setBoardPostions(boardPostions);
        }
        return position;
    }

}
