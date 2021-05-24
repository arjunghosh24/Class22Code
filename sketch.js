const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var eng, world, ground, ball;

function setup()
{
  createCanvas(400,400);

  eng = Engine.create();
  world = eng.world;

  var ground_options = {
    isStatic: true
  }

  var ball_options = {
    restitution:1.0
  }

  ground = Bodies.rectangle(200,390,200,20, ground_options);
  World.add(world,ground);

  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);
}

function draw()
{
  background(0);
  Engine.update(eng);
  rectMode(CENTER);

  Xpos =  ground.position.x;
  Ypos = ground.position.y;

  rect(Xpos,Ypos, 400, 10);

  circleXpos = ball.position.x;
  circleYpos = ball.position.y;

  ellipseMode(RADIUS);

  ellipse(circleXpos,circleYpos, 20, 20);
  
  drawSprites();
}