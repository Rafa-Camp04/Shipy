import MovingObject from "./moving-object";
import Enemy from "./enemy";
import Ship from "./ship";

class Game extends MovingObject {

    constructor() {
        super();
        this.ship = new Ship({});
        this.enemies = [],
        this.addEnemies();
    };

    addEnemies() {
        for (let index = 0; index < 20; index++) {
            const enemy = new Enemy({});
            this.enemies.push(enemy);
        };
    };

    moveObjects() {
        this.enemies.forEach((enemy) => {
            enemy.move();
        });
    };

    draw(ctx) {
        ctx.clearRect(0, 0, 1000, 660);

        this.enemies.forEach((enemy) => {
            enemy.draw(ctx);
        });

    };

};

export default Game;