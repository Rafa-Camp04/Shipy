import MovingObject from "./moving-object.js";

class Enemy extends MovingObject {

    constructor(options){
        options.vel = [1, 0];
        options.color = "#2F739A";
        super(options);
        this.vel = this.randomVel();
        this.pos = this.randomPos();
        this.radius = this.randomRadius();
    };

    randomRadius() {
        const validRadius = [2, 5, 5, 10, 10, 20, 20, 30, 40];
        let index = Math.floor(Math.random() * validRadius.length);

        return validRadius[index];
    };

    randomPos() {
        const startX = [-50, 1050];
        let startY = Math.floor(Math.random() * 660);

        let index = Math.floor(Math.random() * 2);
        const pos = [startX[index], startY];

        return pos;
    };

    randomVel() {
        const validVel = [1, 1.5, 1.5, 2, 2, 2, 3];
        let index = Math.floor(Math.random() * validVel.length);

        const vel = [validVel[index], 0];
        return vel;
    }

    moveEnemy() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
        enemy.move();
        enemy.draw(ctx);
    }

};


export default Enemy;