package nl.team14.webservices.model;

import nl.team14.webservices.model.Player;

import java.time.OffsetDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.SequenceGenerator;


@Entity
public class Pawn {

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
    private Boolean saved;

    @Column
    private String clickable;

    @Column
    private Integer nextPositionIndex;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player_has_pawns_id", nullable = false)
    private Player playerHasPawns;

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

    public Boolean getSaved() {
        return saved;
    }

    public void setSaved(final Boolean saved) {
        this.saved = saved;
    }

    public String getClickable() {
        return clickable;
    }

    public void setClickable(final String clickable) {
        this.clickable = clickable;
    }

    public Integer getNextPositionIndex() {
        return nextPositionIndex;
    }

    public void setNextPositionIndex(final Integer nextPositionIndex) {
        this.nextPositionIndex = nextPositionIndex;
    }

    public Player getPlayerHasPawns() {
        return playerHasPawns;
    }

    public void setPlayerHasPawns(final Player playerHasPawns) {
        this.playerHasPawns = playerHasPawns;
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
