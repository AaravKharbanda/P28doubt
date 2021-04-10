
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);
		
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	tree1 = new Tree(645,400)
	boy1 = new Boy(200,650)
	stone1 = new Stone(150,620)
	sling = new Slingshot(stone1.body,{x:150, y:620});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  tree1.display()
  boy1.display()
  stone1.display()
  sling.display();  
  drawSprites();
  
 
}

function mouseReleased(){
    sling.fly()
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y: mouseY})
}




