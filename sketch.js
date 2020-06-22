const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject	
var world;
var launch;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	launch = new Launcher(paperObject.body,{x:300,y:300})
	//Create a Ground
	

	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  launch.display();  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-145});

    
  	}
}

function mouseDragged(){
	Matter.Body.setPosition(paperObject.body, {x:mouseX,y:mouseY})
}

function mouseReleased(){
	launch.fly();
}


