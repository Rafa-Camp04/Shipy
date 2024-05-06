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

    step() {
        this.moveEnemies();
        this.addEnemies();
        this.ship.move();
        this.growShip();
    };

    drawGame(ctx) {
        ctx.clearRect(0, 0, 1000, 660);
        ctx.drawImage(this.backgroundImg, 0, 0, 1000, 660);

        this.enemies.forEach((enemy) => {
            enemy.drawObject(ctx);
        });

        this.ship.drawObject(ctx);

    };

    addEnemies() {
        for (let index = 0; this.enemies.length < 8; index++) {
            const enemy = new Enemy({});
            this.enemies.push(enemy);
        };
    };

    moveEnemies() {

        for (let i = 0; i < this.enemies.length; i++) {
            let enemy = this.enemies[i]
            if (this.isOutCanvas(enemy.pos)) {
                this.remove(enemy);
                continue;
            }

            if (enemy.startEnemyPos === -50) {
                enemy.move();
            } else {
                enemy.moveLeft();
            };
        };
    };

    isOutCanvas(pos) {
        if (pos[0] < -50 || pos[0] > 1050) {
            return true;
        };
        return false;
    };

    remove(object) {
        const enemyIndex = this.enemies.indexOf(object);
        this.enemies.splice(enemyIndex, 1);
    }

    growShip() {
        for (let i = 0; i < this.enemies.length; i++) {
            let enemy = this.enemies[i];

            if (this.ship.isCollidedWith(enemy) && this.ship.isEnemySmaller(enemy)) {
                this.ship.radius += 1;
                this.remove(enemy);
            } else if (this.ship.isCollidedWith(enemy) && !this.ship.isEnemySmaller(enemy)) {
                //game over
            };
        };
    };

};

export default Game;