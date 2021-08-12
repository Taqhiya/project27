
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ropeObject1;
var ropeObject2;
var ropeObject3;
var ropeObject4;
var ropeObject5;
var roofObject,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);
=
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new roof(400,250,230,20);
	bobObject1=new bob(320,575,40);
	bobObject2=new bob(360,575,40);
	bobObject3=new bob(400,575,40);
	bobObject4=new bob(440,575,40);
	bobObject5=new bob(480,575,40);
ropeObject1=new rope(bobObject1.body,roofObject.body,-80,0);
ropeObject2=new rope(bobObject2.body,roofObject.body,-40,0);
ropeObject3=new rope(bobObject3.body,roofObject.body,0,0);
ropeObject4=new rope(bobObject4.body,roofObject.body,40,0);
ropeObject5=new rope(bobObject5.body,roofObject.body,80,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
roofObject.display();
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
 bobObject1.display();
 bobObject2.display();
bobObject3.display();
 bobObject4.display();
bobObject5.display();
drawSprites();
}

function  keyPressed(){
	if(keyCode === UP__)
}

