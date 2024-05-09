import GameView from "./scripts/game-view";

const gameview = new GameView();

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyS' && gameview.running === false) {gameview.start();}
})