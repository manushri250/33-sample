const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;


var particle;
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var turn = 0;

var gameState = "play";
var gameState = "end";

var division1;
var score =0;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;

  division1 = new Ground(width/2,595,width,10);

  for(var i=0;i<=width-25;i=i+80){
    divisions.push(new Divisions(i,height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j=50; j<=width-25;j=j+50){
    plinkos.push(new Plinko(j,50));
  }

  for(var j=75; j<=width-40;j=j+50){
    plinkos.push(new Plinko(j,100));
  }

  for(var j=50; j<=width-25;j=j+50){
    plinkos.push(new Plinko(j,150));
  }

  for(var j=75; j<=width-40;j=j+50){
    plinkos.push(new Plinko(j,200));
  }

  for(var j=50; j<=width-25;j=j+50){
    plinkos.push(new Plinko(j,250));
  }
    
    
}
 


function draw() {
  background(0);
  textSize(20)
  fill("white")
  text("400", 20, 350 );
  text("500", 100, 350 );
  text("200", 180, 350 );
  text("100", 260, 350 );
  text("300", 340, 350 );
  text("500", 420, 350 );
  text("400", 500, 350 );
  text("100", 580, 350 );
  text("500", 660, 350 );
  text("200", 740, 350 );
  text("Score : "+score,20,30);

  Engine.update(engine);

  division1.display();
  
  
  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display();
   }

 for (var j = 0; j < plinkos.length; j++){
   plinkos[j].display();
 }
  
 if(particle!=null){
   particle.display();

   if(particle.body.position.y>300){
      
    if(particle.body.position.x > 760){
      score = score+500;
      particle = null;
      if(count>= 5) gameState = "end";
    }
   }
 }

 if(particle!=null){
  particle.display();

  if(particle.body.position.y>300){
     
   if(particle.body.position.x < 760){
     score = score+300;
     particle = null;
     if(count>= 5) gameState = "end";
   }
  }
}

 mousePressed();

   
}

function mousePressed(){
  if(gameState!=="end"){
     turn++;
     particle = new Particle(mouseX, 10, 10, 10);
  }
}

  


