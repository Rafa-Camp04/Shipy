import Game from "./game";
import Ship from "./ship";

class GameView {

    constructor() {
        this.game = new Game()
        this.canvas = document.getElementById('background-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.backgroundImg = new Image();

        this.backgroundImg.onload = () => {
            // debugger
            this.ctx.drawImage(this.backgroundImg, 0, 0, this.canvas.width, this.canvas.height);
        };

        // this.backgroundImg.src = '../media/orange-test.webp';
        // this.backgroundImg.src = '../media/background_02.jpeg';
        this.backgroundImg.src = '../../media/background_01.jpeg';
    };

    start () {
        setInterval(() => {
            this.game.moveObjects();
            this.game.draw(this.ctx);
        }, 10);
    };

};

export default GameView;