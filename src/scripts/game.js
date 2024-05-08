import MovingObject from "./moving-object";
import Enemy from "./enemy";
import Ship from "./ship";

class Game extends MovingObject {

    constructor() {
        super();
        this.ship = new Ship({});
        this.score = 0;
        this.enemies = [];
        this.addEnemies();
        this.maxEnemies = 10
        this.paused = false
        this.gameOver = false

        this.backgroundImg = new Image();
        this.backgroundImg.src = 'src/media/background_01 copy.jpg';
        // this.backgroundImg.src = 'src/media/orange-test.webp';
    };

    // runs the game
    step() {
        this.moveEnemies();
        this.addEnemies();
        this.ship.moveShip();
        this.growShip();
        this.displayScore();
    };

    // it prints the canvas and objects
    drawGame(ctx) {
        ctx.clearRect(0, 0, 1000, 660);
        ctx.drawImage(this.backgroundImg, 0, 0, 1000, 660);

        this.enemies.forEach((enemy) => {
            enemy.drawEnemy(ctx);
        });
        
        this.ship.stayInCanvas();
        this.ship.drawShip(ctx)
    };

    // spawn new enemies
    addEnemies() {
        for (let index = 0; this.enemies.length < this.maxEnemies; index++) {
            const enemy = new Enemy({});
            this.enemies.push(enemy);
        };
    };

    // enemies cross the canvas until hit the other side
    moveEnemies() {

        for (let i = 0; i < this.enemies.length; i++) {
            let enemy = this.enemies[i]
            if (this.isOutCanvas(enemy.pos)) {
                this.remove(enemy);
                continue;
            }

            if (enemy.startEnemyPos === -50) {
                enemy.moveRight();
            } else {
                enemy.moveLeft();
            };
        };
    };

    // returns a boolean indicating if the given object is out the canvas
    isOutCanvas(pos) {
        if (pos[0] < -50 || pos[0] > 1050) {
            return true;
        };
        return false;
    };

    // delete object from canvas
    remove(object) {
        const enemyIndex = this.enemies.indexOf(object);
        this.enemies.splice(enemyIndex, 1);
    }

    // increase the ship's radius by 1 if it collides with a smaller enemy. Otherwise, call the game over function.
    growShip() {
        for (let i = 0; i < this.enemies.length; i++) {
            let enemy = this.enemies[i];

            if (this.ship.isCollidedWith(enemy) && this.ship.isEnemySmaller(enemy)) {
                this.ship.radius += 0.1;
                this.increaseScore(enemy);
                this.remove(enemy);
            } else if (this.ship.isCollidedWith(enemy) && !this.ship.isEnemySmaller(enemy)) {
                this.gameOver = true
            };
        };
    };

    // add to the score
    increaseScore(enemy) {
        return this.score += enemy.radius * 2;
    };

    displayScore() {
        const score = document.getElementById('score-value');
        score.textContent = this.score.toString();
    }

    pauseGame() {
        if (this.paused === false) {
            this.paused = true
        } else {
            this.paused = false
        }
    }

    pauseScreen(ctx) {
        if (this.paused) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            debugger
            ctx.fillStyle = "white";
            ctx.font = "30px Arial";
            ctx.fillText("Paused", canvas.width / 2 - 60, canvas.height / 2);
            ctx.font = "15px Arial";
            ctx.fillText("press P to resume", canvas.width / 2 - 70, canvas.height / 2 + 310);
        }
    }

    gameOverScreen(ctx) {
        if (this.gameOver === true) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "red";
            ctx.font = "30px Arial";
            ctx.fillText("GAME OVER", canvas.width / 2 - 60, canvas.height / 2);
        }
    }

};

export default Game;