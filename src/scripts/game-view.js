import Game from "./game";

class GameView {

    constructor() {
        this.game = new Game()
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.pause();
        this.gameOverScreen();
    };

    start () {
        setInterval(() => {
            if (!this.game.paused && !this.game.gameOver) {
                this.game.step();
                this.game.drawGame(this.ctx);
            }
        }, 10);
    };

    pause() {
        const that = this.game
        const ctx = this.ctx

        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                that.pauseGame();
                that.pauseScreen(ctx);
            }
        });
    };

    gameOverScreen() {
        if (this.game.gameOver) {
            this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            this.ctx.fillRect(0, 0, canvas.width, canvas.height);
            this.ctx.fillStyle = "red";
            this.ctx.font = "30px Arial";
            this.ctx.fillText("GAME OVER", canvas.width / 2 - 60, canvas.height / 2);
        }
    }

    // gameOver() {
    //     if (this.game.gameOver) {
    //         this.game.gameOverScreen(this.ctx);
    //     }
    // }

};

export default GameView;