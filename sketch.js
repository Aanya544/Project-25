
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var boder1,boder2,boder3;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,70);
	ground = new Ground(width/2,700,width,20)
	boder1 = new Box(1200,630);

	Engine.run(engine);
}


function draw() {
  
  background(220);
  paper.display();
  ground.display();
  boder1.display();


	

  drawSprites();
}
function keyPressed(){
if(keyCode===UP_ARROW)

Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})

}


