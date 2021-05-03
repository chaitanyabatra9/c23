const Engine=Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();

  world=engine.world;
 
  var options = { restitution : 2.0 }
  object=Bodies.rectangle(200,100,50,50,options);
  World.add(world,object);


  var goptions = { isStatic : true }
  ground=Bodies.rectangle(200,390,400,20,goptions);
  World.add(world,ground);

  var roptions = { restitution : 1.0 }
  robject=Bodies.rectangle(200,200,50,50,roptions);
  World.add(world,robject);
}

function draw()
{
  background("gold");
  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  rectMode(CENTER);
  rect(robject.position.x,robject.position.y,50,50);
}