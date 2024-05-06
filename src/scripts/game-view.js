import Game from "./game";
import Ship from "./ship";

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
            this.game.bindKeyHandlers(this.game);
        }, 10);
    };

};

export default GameView;