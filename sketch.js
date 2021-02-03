var ground;
var part1,part2,part3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Paper(100,500,50);
part1 = new Dustbin(400,630,20,100);
part2 = new Dustbin(600,630,20,100);
part3 = new Dustbin(500,670,200,20);
ground = new Ground(400,690,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  ball.display();
  part1.display();
  part2.display();
  part3.display();
  drawSprites();

  imageMode(CENTER)
  image(dustbinImage,500,590,250,200);
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:250,y:-400});
	}
}


