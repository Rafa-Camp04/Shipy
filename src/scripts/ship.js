import MovingObject from "./moving-object"

class Ship extends MovingObject {

    constructor(options) {
        super();
        this.pos = [500, 330];
        this.vel = [0, 0, 0, 0];
        this.radius = 7;
    };

    moveShip() {
        // debugger
        this.pos[0] += this.vel[0];
        this.pos[0] += this.vel[1];
        this.pos[1] += this.vel[2];
        this.pos[1] += this.vel[3];
    }

    // isInScreen(ship) {
    //     if (ship.pos[0] === 0) {
    //         return "hitLeft";
    //     } else if (ship.pos[0] === 1000) {
    //         return "hitRight";
    //     } else if (ship.pos[1] === 0) {
    //         return "hitTop";
    //     } else if (ship.pos[1] === 660) {
    //         return "hitBottom";
    //     }
    // }

    isCollidedWith(enemy) {
        const distance = Math.sqrt((this.pos[0] - enemy.pos[0]) ** 2 + (this.pos[1] - enemy.pos[1]) ** 2);
        const totalRadius = this.radius + enemy.radius;
        return distance < totalRadius;
    };

    isEnemySmaller(enemy) {
        return enemy.radius < this.radius;
    };

};

export default Ship;