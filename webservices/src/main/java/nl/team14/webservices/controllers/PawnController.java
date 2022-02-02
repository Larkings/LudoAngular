package nl.team14.webservices.controllers;

import java.util.List;
import javax.validation.Valid;

import nl.team14.webservices.dto.PawnDTO;
import nl.team14.webservices.services.PawnService;
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
@RequestMapping(value = "/api/pawns", produces = MediaType.APPLICATION_JSON_VALUE)
public class PawnController {

    private final PawnService pawnService;

    public PawnController(final PawnService pawnService) {
        this.pawnService = pawnService;
    }

    @GetMapping
    public ResponseEntity<List<PawnDTO>> getAllPawns() {
        return ResponseEntity.ok(pawnService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PawnDTO> getPawn(@PathVariable final Long id) {
        return ResponseEntity.ok(pawnService.get(id));
    }

    @PostMapping
    public ResponseEntity<Long> createPawn(@RequestBody @Valid final PawnDTO pawnDTO) {
        return new ResponseEntity<>(pawnService.create(pawnDTO), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updatePawn(@PathVariable final Long id,
            @RequestBody @Valid final PawnDTO pawnDTO) {
        pawnService.update(id, pawnDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePawn(@PathVariable final Long id) {
        pawnService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
