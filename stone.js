class Stone{
    constructor(x,y){
    var options={
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
        
    }
   
    this.body = Bodies.rectangle(x, y, 30, 30, options);
    this.width = 30;
    this.height = 30;
    this.stone = loadImage("stone.png")
    World.add(world, this.body);
    

}

display(){
        var angle = this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.stone, 0, 0, this.width, this.height);
        pop()    
    
}
}

