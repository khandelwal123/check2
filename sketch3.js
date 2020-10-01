const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground2;
var ball;

function preload(){
  backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  block1 = new Blocks(500, 350, 75, 75);
  block2 = new Blocks(700, 350, 75, 75);

  ground2 = new Ground(400, 385, 800, 10);

  pig1 = new PigClass(600, 350);

  log1 = new Logs(600, 300, 280, PI/2)

  block3 = new Blocks(500, 280, 75, 75);
  block4 = new Blocks(700, 280, 75, 75);

  pig2 = new PigClass(600, 280);

  log2 = new Logs(600, 230, 280, PI/2);

  finalBlock = new Blocks(600, 210, 75, 75);

  leftLog = new Logs(560, 210, 150, PI/4);
  rightLog = new Logs(640, 210, 150, -PI/4);

  bird = new Birds(75, 100);

  platform = new Ground(50, 350, 300, 200);

console.log(block2.body.angle);
//   console.log(ground.position.y);
//   console.log(ground.position.x);


}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  block1.display();
  block2.display();
  ground2.display();
  pig1.display();
  log1.display();
  block3.display();
  block4.display();
  pig2.display();
  log2.display();
  finalBlock.display();
  leftLog.display();
  rightLog.display();
  bird.display();
  platform.display();
  drawSprites();
}