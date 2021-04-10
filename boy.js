class Boy {
    constructor(x,y){ 
        var options={
        isStatic:true, 
        restitution:0,
        friction:1     
    }
    this.body = Bodies.rectangle(x, y, 170, 150, options);
    this.width = 170;
    this.height = 150;
    this.boy = loadImage("boy.png")
    World.add(world, this.body);
}
    

    display(){
        var angle = this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.boy, 0, 0, this.width, this.height);
        pop()    
    
}
} 
