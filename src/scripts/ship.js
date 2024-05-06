import MovingObject from "./moving-object"

class Ship extends MovingObject {

    constructor(options) {
        super();
        this.pos = [500, 330];
        this.vel = [1, 1];
        this.radius = 7;
        this.color = "#2F739A";
    };

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