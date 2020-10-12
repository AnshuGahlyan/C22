const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,ground,ball;
function setup(){
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var ground_options={
  isStatic:true

  
}
var ball_options={
  restitution:1
}

ground=Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);
ball= Bodies.circle(200,10,20,ball_options);
World.add(world,ball);
//console.log(object.type);
//console.log(object.position.x);
//console.log(object.position.y);


}



function draw(){

  background(0);

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}






































































































// var movingrect,fixedrect;



// function setup() {
// createCanvas(1200,800);
// movingrect = createSprite(400,200,80,30);
// movingrect.shapeColor = "green";
// fixedrect= createSprite(200,200,50,80);
// fixedrect.shapeColor= "green";
// }

// function draw() {
//   background(0); 
//   movingrect.x = World.mouseX;
//   movingrect.y = World.mouseY;
//    if(movingrect.x-fixedrect.x <= fixedrect.width/2+movingrect.width/2 && 
//     fixedrect.x-movingrect.x <= fixedrect.width/2+movingrect.width/2 &&
//     movingrect.y-fixedrect.y <= fixedrect.height/2+movingrect.height/2 && 
//     fixedrect.y-movingrect.y <= fixedrect.height/2+movingrect.height/2){
// movingrect.shapeColor = "red";
// fixedrect.shapeColor = "red";

//    }
//    else{
//     movingrect.shapeColor = "green";
// fixedrect.shapeColor = "green"; 
//    }
//   drawSprites();
// }