
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,tree,mango1, mango2, mango3,mango4,mango5, stone
function preload()
{
	boy = loadImage("Sprites/boy.png")
	tree = loadImage("Sprites/tree.png")
}

function setup() {
	createCanvas(1300,700);


	engine = Engine.create();
	world = engine.world;
mango1 = new Mango(1000,400,30)
mango2 = new Mango(1200, 350,30)
mango3 = new Mango(1150, 200, 30)
mango4 = new Mango(1080, 230, 30)
mango5 = new Mango(950, 300,30 )
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 Engine.update(engine)
  background(0) 
  image(boy,200,450,200,300)
  image(tree,859,100,400,600)
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  drawSprites();
 
}

function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone.body,{x:235,y:420})
launcherObject.attach(stone.body)
}
}

function dectollision(lstone,lmango){
	mP = lmang.body.position
	sP = lstone.body.position

	var distance = dist(sP.x, sP.y, mP.x, mP.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

