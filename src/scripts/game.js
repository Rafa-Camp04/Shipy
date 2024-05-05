import MovingObject from "./moving-object";
import Enemy from "./enemy";
import Ship from "./ship";

class Game extends MovingObject {

    constructor() {
        super();
        this.ship = new Ship({});
        this.enemies = [],
        this.addEnemies();
        this.backgroundImg = new Image();

        // this.backgroundImg.src = '../media/orange-test.webp';
        // this.backgroundImg.src = '../media/background_02.jpeg';
        this.backgroundImg.src = '../media/background_01.jpg';
    };

    drawGame(ctx) {
        ctx.clearRect(0, 0, 1000, 660);
        ctx.drawImage(this.backgroundImg, 0, 0, 1000, 660);

        this.enemies.forEach((enemy) => {
            enemy.drawObject(ctx);
        });

    };

    addEnemies() {
        for (let index = 0; index < 10; index++) {
            const enemy = new Enemy({});
            this.enemies.push(enemy);
        };
    };

    moveObjects() {

        this.enemies.forEach((enemy) => {
            if (enemy.startEnemyPos === -50) {
                enemy.move();
            } else {
                enemy.moveLeft();
            };
        });
    };

};

export default Game;