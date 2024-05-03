// import Game from "./game.js";
import MovingObject from "./moving-object.js";
import * as Util from "./util.js";

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
        const validRadius = [5, 10, 20, 30, 40];
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
        const validVel = [1, 1, 1, 2, 2, 2, 3];
        let index = Math.floor(Math.random() * validVel.length);

        const vel = [validVel[index], 0];
        return vel;
    }

    // movingEnemy() {
    //     if (this.randomPos[0] === -50) {
    //         this.pos[0] += 1;
    //     } else {
    //         this.pos[0] -= 1;
    //     }
    // }

};


export default Enemy;