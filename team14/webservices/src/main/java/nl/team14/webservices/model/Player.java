package nl.team14.webservices.model;



import java.time.OffsetDateTime;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.SequenceGenerator;


@Entity
public class Player {

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
    private Long playerId;

    @Column
    private String name;

    @Column
    private String playerNumber;

    @Column
    private Integer startPosition;

    @Column
    private Boolean isNext;

    @Column
    private Boolean isWinner;

    @OneToMany(mappedBy = "playerHasPawns")
    private Set<Pawn> playerHasPawnsPawns;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plays_on_id")
    private Board playsOn;

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

    public Long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(final Long playerId) {
        this.playerId = playerId;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getPlayerNumber() {
        return playerNumber;
    }

    public void setPlayerNumber(final String playerNumber) {
        this.playerNumber = playerNumber;
    }

    public Integer getStartPosition() {
        return startPosition;
    }

    public void setStartPosition(final Integer startPosition) {
        this.startPosition = startPosition;
    }

    public Boolean getIsNext() {
        return isNext;
    }

    public void setIsNext(final Boolean isNext) {
        this.isNext = isNext;
    }

    public Boolean getIsWinner() {
        return isWinner;
    }

    public void setIsWinner(final Boolean isWinner) {
        this.isWinner = isWinner;
    }

    public Set<Pawn> getPlayerHasPawnsPawns() {
        return playerHasPawnsPawns;
    }

    public void setPlayerHasPawnsPawns(final Set<Pawn> playerHasPawnsPawns) {
        this.playerHasPawnsPawns = playerHasPawnsPawns;
    }

    public Board getPlaysOn() {
        return playsOn;
    }

    public void setPlaysOn(final Board playsOn) {
        this.playsOn = playsOn;
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
