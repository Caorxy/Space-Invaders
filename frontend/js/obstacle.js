class Obstacle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.visible = true;
    }

    kill() {
        this.visible = false;
    }
}