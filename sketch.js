Engine = Matter.Engine;
World= Matter.World;
Bodies = Matter.Bodies;

var groundobj;
var divisionheight=300;
var particles = [];
var plinkos = [];
var divisions =[];
var score =0;

function setup() {
createCanvas(800,800);
engine = Engine.create(); 
world = engine.world; 
groundobj = new Ground(width/2,height,width,20);



for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionheight/2, 10, divisionheight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

   

   
}

function draw() {
background(0);  
background(0);  
Engine.update(engine);
groundobj.display();
  
for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
}