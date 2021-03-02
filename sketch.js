const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var dustbin,paper,ground	
var world;
var launcher;

function setup() {
	createCanvas(1600,1000);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(200,450,70);
	dustbin=new Dustbin(1200,650);
	ground =new Ground (width/2,670,width,20);
	launcher = new Launcher (paper.body,{x:200,y:100});

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }});
	Engine.run(engine);
	Render.run(render);
}

function draw() {
  rectMode(CENTER);
  background(230);
  paper.display();
  ground.display();
  dustbin.display();
  launcher.display();
}
function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
	
}
function mouseReleased(){
launcher.fly();
	
}
	
	
