import Game from "./game";

class GameView {

    constructor() {
        this.game = new Game()
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.pause();
        // this.gameOver1();
    };

    start () {
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

    // gameOver1() {
    //     if (this.game.gameOver) {
    //         debugger
    //         this.game.gameOverScreen(this.ctx);
    //     }
    // }

};

export default GameView;