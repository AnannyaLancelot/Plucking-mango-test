
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var stone;
var boyi,boy;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var slingshot;
function preload()
{
boyi=loadImage("boy.png");

}

function setup() {
	createCanvas(1600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  tree=new Tree(1000,20)
	  
	  boy=createSprite(200,470)
	  boy.addImage(boyi)
	  boy.scale=0.2
	  boy.depth=0;

	  stone=new Stone(100,300,20)

      ground=new Ground(800,590,1600,10);
	
	  mango1=new Mango(1300,50); 
	  mango2=new Mango(1300,200); 
	  mango3=new Mango(1100,180); 
	  mango4=new Mango(1100,180); 
	  mango5=new Mango(1200,110); 
	  mango6=new Mango(1400,110);
	  mango7=new Mango(1450,190);

	  //slingshot = new Slingshot(stone.body,{x:100,y:350});

	  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  
  tree.display();
  boy.display();
  stone.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

 // slingshot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
//slingshot.fly();	
}
function detectCollision(lstone,lmango){
	stonePos=lstone.body.position;
	mangoPos=lmango.body.position;

	var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}

}



