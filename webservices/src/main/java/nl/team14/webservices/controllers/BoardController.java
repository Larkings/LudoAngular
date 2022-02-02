package nl.team14.webservices.controllers;

import nl.team14.webservices.dto.BoardDTO;
import nl.team14.webservices.services.BoardService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import javax.validation.Valid;
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
@RequestMapping(value = "/api/boards", produces = MediaType.APPLICATION_JSON_VALUE)
public class BoardController {

    private final BoardService boardService;

    public BoardController(final BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping
    public ResponseEntity<List<BoardDTO>> getAllBoards() {
        return ResponseEntity.ok(boardService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BoardDTO> getBoard(@PathVariable final Long id) {
        return ResponseEntity.ok(boardService.get(id));
    }

    @PostMapping
    public ResponseEntity<Long> createBoard(@RequestBody @Valid final BoardDTO boardDTO) {
        return new ResponseEntity<>(boardService.create(boardDTO), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateBoard(@PathVariable final Long id,
                                            @RequestBody @Valid final BoardDTO boardDTO) {
        boardService.update(id, boardDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBoard(@PathVariable final Long id) {
        boardService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
