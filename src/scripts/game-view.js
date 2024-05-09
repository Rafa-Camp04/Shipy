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
        this.ctx.fillText("Press S to start", canvas.width / 2 - 120, canvas.height / 2);
    }

    start() {
        this.running = true

        setInterval(() => {
            if (!this.game.paused && !this.game.gameOver) {
                this.game.step(this.ctx);
                this.game.drawGame(this.ctx);
            }
            this.game.gameOverScreen(this.ctx)
        }, 10);
    };

    pause() {
        const that = this.game
        const ctx = this.ctx

        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyP') {
                that.pauseGame();
                that.pauseScreen(ctx);
            }
        });
    };

    restart() {
        const game = this.game

        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyR' && game.gameOver === true) this.game = new Game();
        })
    }

};

export default GameView;