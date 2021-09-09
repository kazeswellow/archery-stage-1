const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball;
var ball2;
var ball3;
var ball4;
var ball5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ball =new ellipse(bob1,ball)
  World.add(world,ball);
  ball2 = 
  World.add(world,ball2);
  ball3 = 
  World.add(world,ball3);
  ball4 = 
  World.add(world,ball4);
  ball5 = 
  World.add(world,ball5);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
