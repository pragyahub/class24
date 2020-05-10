const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    console.log(engine.world);
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var ball_Option = {
    restitution: 1.0  
}
    ground = Bodies.rectangle(200,390,200,20,ground_options); 
    World.add(world,ground);
ball = Bodies.circle(200,100,20,ball_Option);
World.add(world,ball);
    console.log(ball.position.x);
    console.log(ball.position.y);
    console.log(ball.position.ground_options);
    console.log(ball.position.ball_option);

}

function draw(){
    background(150);
    Engine.update(engine);
    rectMode(CENTER);
    fill("pink");
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(ball.position.x,ball.position.y,20,20);
}