package nl.team14.webservices.dto;

import javax.validation.constraints.Size;


public class PlayerDTO {

    private Long id;

    private Long playerId;

    @Size(max = 255)
    private String name;

    @Size(max = 255)
    private String playerNumber;

    private Integer startPosition;

    private Boolean isNext;

    private Boolean isWinner;

    private Long playsOn;

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

    public Long getPlaysOn() {
        return playsOn;
    }

    public void setPlaysOn(final Long playsOn) {
        this.playsOn = playsOn;
    }

}
