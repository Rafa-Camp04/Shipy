import GameView from "./scripts/game-view";
import Enemy from "./scripts/enemy";
import MovingObject from "./scripts/moving-object";
window.MovingObject = MovingObject;
window.Enemy = Enemy;

// backgroundImg.onload = function() {
//     ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
// }

// function moveEnemy() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
//     enemy.move();
//     enemy.draw(ctx);
// }

// setInterval(moveEnemy, 10);

const gameview = new GameView();
gameview.start();