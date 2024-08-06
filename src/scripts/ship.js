import MovingObject from "./moving-object"

class Ship extends MovingObject {

    constructor(options) {
        super();
        this.pos = [500, 330];
        this.vel = [0, 0, 0, 0];
        this.radius = 9;
        this.bindKeyHandlers();

        this.arrowKeys = new Set();

        this.direction = 'right';
    };

    drawShip(ctx) {
        ctx.save();
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        if (this.direction === 'right' && this.arrowKeys.size > 0) {
            ctx.translate(this.pos[0], this.pos[1]);
            ctx.rotate(Math.PI / 2);
            ctx.drawImage(this.sprite, 0*79, 1*79, 79, 79, -this.radius * 1.5, -this.radius * 1.7, this.radius * 3, this.radius * 3);
        } else if (this.direction === 'left' && this.arrowKeys.size > 0) {
            ctx.translate(this.pos[0], this.pos[1]);
            ctx.rotate(-Math.PI / 2);
            ctx.drawImage(this.sprite, 0*79, 1*79, 79, 79, -this.radius * 1.5, -this.radius * 1.7, this.radius * 3, this.radius * 3);
        } else if (this.direction === 'left' && this.arrowKeys.size === 0) {
            ctx.translate(this.pos[0], this.pos[1]);
            ctx.rotate(-Math.PI / 2);
            ctx.drawImage(this.sprite, 1*79, 0*79, 79, 79, -this.radius * 1.5, -this.radius * 1.7, this.radius * 3, this.radius * 3);
        } else if (this.direction === 'right' && this.arrowKeys.size === 0) {
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

            function oppositePressed(key) {
                const keys = {
                    "ArrowUp": "ArrowDown",
                    "ArrowLeft": "ArrowRight",
                    "ArrowRight": "ArrowLeft",
                    "ArrowDown": "ArrowUp"
                }
                return ship.arrowKeys.has(keys[key])
            };

            if (event.code === "ArrowUp") {
                if (oppositePressed(event.code)) return;
                vel[2] = -2;
                ship.arrowKeys.add(event.code);
            }
            if (event.code === "ArrowDown") {
                if (oppositePressed(event.code)) return;
                vel[3] = 2;
                ship.arrowKeys.add(event.code);
            }

            if (event.code === "ArrowLeft") {
                if (oppositePressed(event.code)) return;
                vel[0] = -2;
                ship.direction = 'left';
                ship.arrowKeys.add(event.code);
            }
            if (event.code === "ArrowRight") {
                if (oppositePressed(event.code)) return;
                vel[1] = 2;
                ship.direction = 'right';
                ship.arrowKeys.add(event.code);
            }
            return event.code;
        })

        document.addEventListener("keyup", function(event) {
            if (event.code === "ArrowUp") {
                // if (ship.arrowKeys.has())
                vel[2] = 0;
                ship.arrowKeys.delete(event.code);
            }
            if (event.code === "ArrowDown") {
                vel[3] = 0;
                ship.arrowKeys.delete(event.code);
            }
            if (event.code === "ArrowLeft") {
                vel[0] = 0;
                ship.direction = 'left';
                ship.arrowKeys.delete(event.code);
            }
            if (event.code === "ArrowRight") {
                vel[1] = 0;
                ship.direction = 'right';
                ship.arrowKeys.delete(event.code);
            }
            return event.code;
        })
    };

    // this function add borders to the canvas, so the spaceship doesn't leave the game
    stayInCanvas() {

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