import MovingObject from "./moving-object.js";

class Enemy extends MovingObject {

    constructor(options){
        super(options);
        this.vel = this.randomVel();
        this.pos = this.randomPos();
        this.radius = this.randomRadius();
        this.startEnemyPos = this.pos[0];
    };

    drawEnemy(ctx) {
        ctx.save();

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

            if (this.startEnemyPos === -50) {
                ctx.translate(this.pos[0], this.pos[1]);
                ctx.rotate(Math.PI / 2);
                ctx.drawImage(this.sprite, 0*79, 1*79, 79, 79, -this.radius * 1.5, -this.radius * 1.7, this.radius * 3, this.radius * 3);
            } else {
                ctx.translate(this.pos[0], this.pos[1]);
                ctx.rotate(-Math.PI / 2);
                ctx.drawImage(this.sprite, 0*79, 1*79, 79, 79, -this.radius * 1.5, -this.radius * 1.7, this.radius * 3, this.radius * 3);
            }

        ctx.restore();
    }

    randomRadius() {
        const validRadius = [3, 6, 10, 18, 18, 26, 26, 32, 32, 40];
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
        const validVel = [1, 1.1, 1.2, 1.3, 1.4, 1.5,  1.6, 1.7, 1.8, 2, 2.5, 3];
        let index = Math.floor(Math.random() * validVel.length);

        const vel = [validVel[index], 0];
        return vel;
    }

};


export default Enemy;