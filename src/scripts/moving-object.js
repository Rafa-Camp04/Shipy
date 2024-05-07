class MovingObject {

    constructor(options) {
        this.sprite = new Image()
        this.sprite.src = 'src/media/sprite.png';
    }

    
    moveRight() {
        this.pos[0]+=this.vel[0];
    }

    moveLeft() {
        this.pos[0]-=this.vel[0];
    }

    drawObject(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);

        ctx.fillStyle = "#00FF00";
        ctx.fill();

        ctx.closePath();
    }

}

export default MovingObject;