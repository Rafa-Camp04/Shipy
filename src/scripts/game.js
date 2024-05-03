import MovingObject from "./moving-object";
import Enemy from "./enemy";
import Ship from "./ship";

class Game extends MovingObject {

    static ENEMIES = []

    constructor() {
        this.addEnemies();
    };

    addEnemies() {
        for (let index = 0; index < 20; index++) {
            const enemy = new Enemy({});
            Ship.ENEMIES.push(enemy)
            Ship.ENEMIES[index].draw(Game.CTX)
        };
        setInterval(moveEnemy, 10);
    };

};

export default Game;