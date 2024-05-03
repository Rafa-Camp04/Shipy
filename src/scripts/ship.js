import MovingObject from "./moving-object"

class Ship extends MovingObject {

    static CANVAS = document.getElementById('background-canvas');
    static CTX = Game.CANVAS.getContext('2d');

    static POS = [500, 330];
    static VEL = [1, 1];
    static RADIUS = 15;
    static COLOR = "#2F739A"

    constructor(options) {
        options.pos = Ship.POS;
        options.vel = Ship.VEL;
        options.radius = Ship.RADIUS;
        options.color = Ship.COLOR;

    };

};

export default Ship;