package nl.team14.webservices.dto;

import javax.validation.constraints.NotNull;


public class PositionDTO {

    private Long id;

    private Integer x;

    private Integer y;

    private Boolean hasPawn;

    @NotNull
    private Long boardPostions;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public Integer getX() {
        return x;
    }

    public void setX(final Integer x) {
        this.x = x;
    }

    public Integer getY() {
        return y;
    }

    public void setY(final Integer y) {
        this.y = y;
    }

    public Boolean getHasPawn() {
        return hasPawn;
    }

    public void setHasPawn(final Boolean hasPawn) {
        this.hasPawn = hasPawn;
    }

    public Long getBoardPostions() {
        return boardPostions;
    }

    public void setBoardPostions(final Long boardPostions) {
        this.boardPostions = boardPostions;
    }

}
