import MovingObject from "./moving-object"

class Ship extends MovingObject {

    constructor(options) {
        super();
        this.pos = [500, 330];
        this.vel = [0, 0, 0, 0];
        this.radius = 9;
        this.bindKeyHandlers();

        this.direction = 'right';
        this.pressed = false;
    };

    drawShip(ctx) {
        ctx.save();
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        if (this.direction === 'right' && this.pressed === true) {
            ctx.translate(this.pos[0], this.pos[1]);
            ctx.rotate(Math.PI / 2);
            ctx.drawImage(this.sprite, 0*79, 1*79, 79, 79, -this.radius * 1.5, -this.radius * 1.7, this.radius * 3, this.radius * 3);
        } else if (this.direction === 'left' && this.pressed === true) {
            ctx.translate(this.pos[0], this.pos[1]);
            ctx.rotate(-Math.PI / 2);
            ctx.drawImage(this.sprite, 0*79, 1*79, 79, 79, -this.radius * 1.5, -this.radius * 1.7, this.radius * 3, this.radius * 3);
        } else if (this.direction === 'left' && this.pressed === false) {
            ctx.translate(this.pos[0], this.pos[1]);
            ctx.rotate(-Math.PI / 2);
            ctx.drawImage(this.sprite, 1*79, 0*79, 79, 79, -this.radius * 1.5, -this.radius * 1.7, this.radius * 3, this.radius * 3);
        } else {
            ctx.translate(this.pos[0], this.pos[1]);
            ctx.rotate(Math.PI / 2);
            ctx.drawImage(this.sprite, 1*79, 0*79, 79, 79, -this.radius * 1.5, -this.radius * 1.7, this.radius * 3, this.radius * 3);
        }

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
        const ship = this

        document.addEventListener("keydown", function(event) {
            if (event.code === "ArrowUp") {
                vel[2] = -2;
                ship.pressed = true;
            }
            if (event.code === "ArrowDown") {
                vel[3] = 2;
                ship.pressed = true;
            }

            if (event.code === "ArrowLeft") {
                vel[0] = -2;
                ship.direction = 'left';
                ship.pressed = true;
            }
            if (event.code === "ArrowRight") {
                vel[1] = 2;
                ship.direction = 'right';
                ship.pressed = true;
            }
            
            return event.code;
        })

        document.addEventListener("keyup", function(event) {
            if (event.code === "ArrowUp") {
                vel[2] = 0;
                ship.pressed = false;
            }
            if (event.code === "ArrowDown") {
                vel[3] = 0;
                ship.pressed = false;
            }

            if (event.code === "ArrowLeft") {
                vel[0] = 0;
                ship.direction = 'left';
                ship.pressed = false;
            }
            if (event.code === "ArrowRight") {
                vel[1] = 0;
                ship.direction = 'right';
                ship.pressed = false;
            }

            return event.code;
        })
    };

    stayInCanvas() {
        const canvas = document.getElementById('background-canvas');

        if (this.pos[0] - this.radius < 0) {
            this.pos[0] = 0 + this.radius;
        }

        if (this.pos[1] - this.radius < 0) {
            this.pos[1] = 0 + this.radius;
        }

        if (this.pos[0] + this.radius > 1000) {
            this.pos[0] = 1000 - this.radius;
        }

        if (this.pos[1] + this.radius > 660) {
            this.pos[1] = 660 - this.radius;
        }
    }

};

export default Ship;