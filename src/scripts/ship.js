import MovingObject from "./moving-object"

class Ship extends MovingObject {

    constructor(options) {
        super();
        this.pos = [500, 330];
        this.vel = [0, 0, 0, 0];
        this.radius = 7;

        
    };

    drawShip(ctx) {
        ctx.save();

        


        ctx.restore();
    }

    moveShip() {
        this.pos[0] += this.vel[0];
        this.pos[0] += this.vel[1];
        this.pos[1] += this.vel[2];
        this.pos[1] += this.vel[3];
    }

    isCollidedWith(enemy) {
        const distance = Math.sqrt((this.pos[0] - enemy.pos[0]) ** 2 + (this.pos[1] - enemy.pos[1]) ** 2);
        const totalRadius = this.radius + enemy.radius;
        return distance < totalRadius;
    };

    isEnemySmaller(enemy) {
        return enemy.radius < this.radius;
    };

    bindKeyHandlers() {
        const vel = this.vel

        document.addEventListener("keydown", function(event) {
            if (event.code === "ArrowUp") vel[2] = -2;
            if (event.code === "ArrowDown") vel[3] = 2;

            if (event.code === "ArrowLeft") {
                vel[0] = -2;
                
            }
            if (event.code === "ArrowRight") {
                vel[1] = 2;
                
            }
            
        })

        document.addEventListener("keyup", function(event) {
            if (event.code === "ArrowUp") vel[2] = 0;
            if (event.code === "ArrowDown") vel[3] = 0;

            if (event.code === "ArrowLeft") {
                vel[0] = 0;
                
            }
            if (event.code === "ArrowRight") {
                vel[1] = 0;
                
            }
        })
    };

};

export default Ship;