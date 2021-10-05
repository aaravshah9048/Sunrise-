const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour =0;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    console.log(hour);
    if(hour>=12){
        console.log(hour);
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        //console.log(hour);
        text("Time : 12 AM",100,100);
    }else{
        //console.log(hour);
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var res=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
 
    //change the data in JSON format and store it in variable responseJSON
    var jason = await res.json()

    
    //fetch datetime from responseJSON
    var dayTime = jason.datetime
    console.log(dayTime);
    

    // slice the datetime to extract hour
     hour = dayTime.slice(11,13);

    
    if(hour>=0 && hour<18 ){
        console.log("hour"+hour);
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
