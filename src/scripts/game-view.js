import Game from "./game";

class GameView {

    constructor() {
        this.game = new Game()
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.running = false

        this.menu();
        this.pause();
        this.restart();
    };

    menu() {
        this.ctx.fillStyle = "#1D2031";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.fillStyle = "white";
        this.ctx.font = "30px Arial";
        this.ctx.fillText("Press S to start", canvas.width / 2 - 100, canvas.height / 2);
    }

    start() {
        this.running = true

        setInterval(() => {

            if (!this.game.paused && !this.game.gameOver) {
                this.game.step(this.ctx);
                this.game.drawGame(this.ctx);
            }

            this.game.gameOverScreen(this.ctx)

            if (this.game.ship.radius > 250) {
                this.easterEgg();
            }

        }, 10);
    };

    pause() {
<<<<<<< HEAD
=======
        const game = this.game
>>>>>>> a7228915998bf26d254f8d689a833dc7e6d75029
        const ctx = this.ctx

        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyP') {
<<<<<<< HEAD
                const game = this.game
=======
>>>>>>> a7228915998bf26d254f8d689a833dc7e6d75029
                game.pauseGame();
                game.pauseScreen(ctx);
            }
        });
    };

    restart() {
        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyR') this.game = new Game();
        })
    }

    easterEgg() {
        this.game.gameOver = true
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.fillStyle = "yellow";
        this.ctx.font = "40px Arial";
        this.ctx.fillText("CONGRATULATIONS!", canvas.width / 2 - 200, canvas.height / 2 - 40);
        this.ctx.font = "30px Arial";
        this.ctx.fillText("YOU BROKE MY GAME...", canvas.width / 2 - 165, canvas.height / 2);
        this.ctx.font = "15px Arial";
        this.ctx.fillText("If you found this", canvas.width / 2 - 58, canvas.height / 2 + 50);
        this.ctx.fillText("Take a screenshot and DM me on instagram: @rafacamp0", canvas.width / 2 - 200, canvas.height / 2 + 70);
        this.ctx.fillStyle = "white";
        this.ctx.font = "15px Arial";
        this.ctx.fillText("press R to restart", canvas.width / 2 - 60, canvas.height / 2 + 310);
    }

};

export default GameView;