class PlayerArcher {
    constructor(x,y,width,height){
        const options = {
            isStatic: true
        };

        this.body = Matter.Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.collapse = false;
        this.image = loadImage("./assets/playerArcher.png");

        World.add(world, this.body);
        Matter.Body.setAngle(this.body, -90);
    }
}