import Enemy from "./scripts/enemy";
import MovingObject from "./scripts/moving-object";
window.MovingObject = MovingObject;
window.Enemy = Enemy;


const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

const backgroundImg = new Image();

backgroundImg.onload = function() {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
}

// backgroundImg.src = 'src\styles\media\orange-test.webp';
// backgroundImg.src = 'src\styles\media\background_02.jpeg';
backgroundImg.src = 'src\styles\media\background_01.jpeg';


const enemy = new Enemy({});

function moveEnemy() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    enemy.move();
    enemy.draw(ctx);
}

setInterval(moveEnemy, 10);