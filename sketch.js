const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground_options = 
  {
    isStatic : true
  }

  ground = Bodies.rectangle(400, 390, 800, 10, ground_options);
  World.add(world, ground);
  
  ball_options = {
    restitution : 1
  }

  ball = Bodies.circle(400, 75, 25, ball_options);
  World.add(world, ball);

  console.log(ground);
  console.log(ground.position.y);
  console.log(ground.position.x);


}

function draw() {
  background("yellow");

  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 10);
  //rect(400, 300, 50, 50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 25, 25);

  drawSprites();
}