class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("paper.png");
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(RADIUS);
        fill("red");
        image( this.image,0, 0, 50, 50);
        pop();
      }
}