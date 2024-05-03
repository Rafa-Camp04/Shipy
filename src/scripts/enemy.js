import MovingObject from "./moving-object.js";
import * as Util from "./util.js";

class Enemy extends MovingObject {
    static COLOR = "#2F739A";
    static RADIUS = 30;
    // static VEL = [50, 50];
    // static POS = [100, 100];

    constructor(options){
        // options.pos = Enemy.POS;
        options.radius = Enemy.RADIUS;
        options.vel = [1, 0]
        options.color = Enemy.COLOR;
        super(options)
    };

};


export default Enemy;