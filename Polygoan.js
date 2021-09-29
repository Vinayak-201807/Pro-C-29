class Polygoan{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            // set the isStatic property 
            isStatic : false
        }
        
        this.polygoan = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.polygoan);
      }
      display(){
        var angle = this.polygoan.angle;
        var pos= this.polygoan.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(rock_img,0,0,this.width, this.height);
        pop();
      }
}