package nl.team14.webservices.model;

import java.time.OffsetDateTime;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.SequenceGenerator;


@Entity
public class Board {

    @Id
    @Column(nullable = false, updatable = false)
    @SequenceGenerator(
            name = "primary_sequence",
            sequenceName = "primary_sequence",
            allocationSize = 1,
            initialValue = 10000
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "primary_sequence"
    )
    private Long id;

    @Column
    private Integer trackLength;

    @Column
    private Integer trackWidth;

    @Column
    private String positions;

    @Column
    private Integer playerIndexWithTurn;

    @Column
    private String latestDiceResult;

    @OneToMany(mappedBy = "boardPostions")
    private Set<Position> boardPostionsPositions;

    @OneToMany(mappedBy = "playsOn")
    private Set<Player> playsOnPlayers;

    @Column(nullable = false, updatable = false)
    private OffsetDateTime dateCreated;

    @Column(nullable = false)
    private OffsetDateTime lastUpdated;

    @PrePersist
    public void prePersist() {
        dateCreated = OffsetDateTime.now();
        lastUpdated = dateCreated;
    }

    @PreUpdate
    public void preUpdate() {
        lastUpdated = OffsetDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public Integer getTrackLength() {
        return trackLength;
    }

    public void setTrackLength(final Integer trackLength) {
        this.trackLength = trackLength;
    }

    public Integer getTrackWidth() {
        return trackWidth;
    }

    public void setTrackWidth(final Integer trackWidth) {
        this.trackWidth = trackWidth;
    }

    public String getPositions() {
        return positions;
    }

    public void setPositions(final String positions) {
        this.positions = positions;
    }

    public Integer getPlayerIndexWithTurn() {
        return playerIndexWithTurn;
    }

    public void setPlayerIndexWithTurn(final Integer playerIndexWithTurn) {
        this.playerIndexWithTurn = playerIndexWithTurn;
    }

    public String getLatestDiceResult() {
        return latestDiceResult;
    }

    public void setLatestDiceResult(final String latestDiceResult) {
        this.latestDiceResult = latestDiceResult;
    }

    public Set<Position> getBoardPostionsPositions() {
        return boardPostionsPositions;
    }

    public void setBoardPostionsPositions(final Set<Position> boardPostionsPositions) {
        this.boardPostionsPositions = boardPostionsPositions;
    }

    public Set<Player> getPlaysOnPlayers() {
        return playsOnPlayers;
    }

    public void setPlaysOnPlayers(final Set<Player> playsOnPlayers) {
        this.playsOnPlayers = playsOnPlayers;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(final OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(final OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

}
