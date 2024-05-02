addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    const backgroundImg = new Image();

    backgroundImg.src = '../media/background_02.jpeg';
    ctx.fillStyle = "orange";

    backgroundImg.onload = function() {
        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

    };




});