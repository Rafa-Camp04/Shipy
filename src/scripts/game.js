import MovingObject from "./moving-object";
import Enemy from "./enemy";

class Game extends MovingObject {

    constructor() {
        this.enemies = [];
        this.addEnemies();
    };

    addEnemies() {
        const enemy = new Enemy({});
        const enemy2 = new Enemy({});
        const enemy3 = new Enemy({});
        this.enemies.push(enemy);
        this.enemies.push(enemy2);
        this.enemies.push(enemy3);
    };

    // draw(ctx) {
    //     // for (let index = 0; index < ctx.length; index++) {
    //         ctx.beginPath();
    //         ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);

    //         ctx.fillStyle = "#00FF00";
    //         ctx.fill();
    //     // }
    // }

};

export default Game;