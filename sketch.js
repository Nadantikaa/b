const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function preload() {
    ballImg = loadImage("polygon.png");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    log1 = new Lab(200,300,10,50);

    
}

function draw(){
    Engine.update(engine);
       

    log1.display();
}
