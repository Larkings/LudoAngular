package nl.team14.webservices.dto;

import javax.validation.constraints.Size;


public class BoardDTO {

    private Long id;

    private Integer trackLength;

    private Integer trackWidth;

    @Size(max = 255)
    private String positions;

    private Integer playerIndexWithTurn;

    @Size(max = 255)
    private String latestDiceResult;

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

}
