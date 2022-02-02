package nl.team14.webservices.controllers;

import java.util.List;
import javax.validation.Valid;

import nl.team14.webservices.dto.PositionDTO;
import nl.team14.webservices.services.PositionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/api/positions", produces = MediaType.APPLICATION_JSON_VALUE)
public class PositionController {

    private final PositionService positionService;

    public PositionController(final PositionService positionService) {
        this.positionService = positionService;
    }

    @GetMapping
    public ResponseEntity<List<PositionDTO>> getAllPositions() {
        return ResponseEntity.ok(positionService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PositionDTO> getPosition(@PathVariable final Long id) {
        return ResponseEntity.ok(positionService.get(id));
    }

    @PostMapping
    public ResponseEntity<Long> createPosition(@RequestBody @Valid final PositionDTO positionDTO) {
        return new ResponseEntity<>(positionService.create(positionDTO), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updatePosition(@PathVariable final Long id,
            @RequestBody @Valid final PositionDTO positionDTO) {
        positionService.update(id, positionDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePosition(@PathVariable final Long id) {
        positionService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
