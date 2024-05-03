import Enemy from "./scripts/enemy";
import MovingObject from "./scripts/moving-object";
window.MovingObject = MovingObject;
window.Enemy = Enemy;


const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');
const backgroundImg = new Image();

// backgroundImg.src = '../media/orange-test.webp';
backgroundImg.src = '../media/background_02.jpeg';
// backgroundImg.src = '../media/page-background.jpg';

const enemy = new Enemy({ pos: [0, 300] });

backgroundImg.onload = function() {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    // enemy.draw(ctx);
};

function moveEnemy() {
    enemy.move();
    enemy.draw(ctx); // Call the move method of the enemy object
}

// Call the moveEnemy function every second
setInterval(moveEnemy, 1);