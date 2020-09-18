const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var block1,block2,block3,block4,block5,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  
  block1 = new Box(30,390,30,40);
  











  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  drawSprites();
}