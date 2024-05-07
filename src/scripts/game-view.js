import Game from "./game";

class GameView {

    constructor() {
        this.game = new Game()
        this.canvas = document.getElementById('background-canvas');
        this.ctx = this.canvas.getContext('2d');
    };

    start () {
        setInterval(() => {
            this.game.step();
            this.game.drawGame(this.ctx);
        }, 10);
    };

};

export default GameView;