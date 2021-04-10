class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB = pointB
        }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
        
            strokeWeight(7);
            stroke("white")
            if(pointA.x<220){
            line(pointA.x-20,pointA.y, this.pointB.x-10, this.pointB.y);  
            line(pointA.x-20, pointA.y, this.pointB.x+30, this.pointB.y); 
           }
            else{
            line(pointA.x+25,pointA.y, this.pointB.x-10, this.pointB.y);  
            line(pointA.x+25, pointA.y, this.pointB.x+30, this.pointB.y); 
            }
            
        }
        
    }
    fly(){
     this.sling.bodyA = null   
    }   
}
