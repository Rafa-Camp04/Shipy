class MovingObject {

    constructor(options) {
        
    }

    move() {
        this.pos[0]+=this.vel[0];
        this.pos[1]+=this.vel[1];
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