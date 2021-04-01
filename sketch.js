const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var score=0


function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(750,790,1500,10);
    box1=new Box(900,100,70,70)
    box2=new Box(900,100,70,70)
    box3=new Box(900,100,70,70)
    box4=new Box(900,100,70,70)
    box5=new Box(900,100,70,70)
    box6=new Box(900,100,70,70)
    box7=new Box(900,100,70,70)
    box8=new Box(900,100,70,70)
    

    ball=new Ball(200,200,80)
    
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:500, y:50});
}

function draw(){
background("blue")
    
    
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    ball.display()


    ground.display();
    slingshot.display()

}



function mouseDragged(){
  //  if (gameState=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //  }
}


function mouseReleased(){
    slingshot.fly();
    
}

