const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Lucas = Lucas.Brown;

var maxSnow = 100;
var snow = [];
var rand;

function preload(){
    bg = loadImage("snow2.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world =  engine.world;


}

function draw() {
  background(bg);  
  Engine.update(engine);
  rand = Math.round(random(1,4));

  if(frameCount % 5 ===0){
    snow.push(new Snow(random(0,800),30,30));
  }

  for(var  j =0; j<snow.length; j++){
    snow[j].display();
  }
}