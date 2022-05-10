package nl.team14.webservices.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


public class PawnDTO {

    private Long id;

    private Boolean saved;

    @Size(max = 255)
    private String clickable;

    private Integer nextPositionIndex;

    @NotNull
    private Long playerHasPawns;

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

    public Long getPlayerHasPawns() {
        return playerHasPawns;
    }

    public void setPlayerHasPawns(final Long playerHasPawns) {
        this.playerHasPawns = playerHasPawns;
    }

}
