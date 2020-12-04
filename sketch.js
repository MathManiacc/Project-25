const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50, 600);

	ground = new Ground(200, 672, 2000, 20);

	dustbin1 = new Dustbin(550, 535, 230, 260);
	
	Engine.run(engine);
}

function draw() {
	background("lightgray");

	paper.display();
	ground.display();
	dustbin1.display();

	//paper.depth = dustbin1.depth;
    //dustbin1.depth = dustbin1.depth + 1;

	drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:180, y:-325});
	}
}
