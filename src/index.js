import GameView from "./scripts/game-view";
import Enemy from "./scripts/enemy";
import MovingObject from "./scripts/moving-object";
window.MovingObject = MovingObject;
window.Enemy = Enemy;

const gameview = new GameView();
gameview.start();