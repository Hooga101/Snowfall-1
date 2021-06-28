class Snow{
    constructor(x,y,r){
        this.r = r;
        this.image = loadImage("snow5.webp");
        this.body = Bodies.circle(x,y,this.r,{restitution:0.8})
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop()
    }
}