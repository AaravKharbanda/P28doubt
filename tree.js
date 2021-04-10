class Tree{
    constructor(x,y){ 
        var options={
        isStatic:true, 
        restitution:0,
        friction:1     
    }
    this.body = Bodies.rectangle(x, y, 300, 600, options);
    this.width = 300;
    this.height = 600;
    this.tree = loadImage("tree.png")
    World.add(world, this.body);
}
    

    display(){
        var angle = this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.tree, 0, 0, this.width, this.height);
        pop()    
    
}
} 

