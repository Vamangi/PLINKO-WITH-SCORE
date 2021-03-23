var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var particles = [];
  var plinkos = [];
  var divisions=[]
  var count=0
  var score=0
  var divisionHeight=300;
  var score =0;
  var gameState="start"
  var particle


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
  background("black");
  textSize(30)
 text("Score : "+score,20,30);

 textSize(40)
 text("100",7,540);

 textSize(40)
 text("100",87,540);

 textSize(40)
 text("100",167,540);

 textSize(40)
 text("100",247,540);
 textSize(40)
 text("600",327,540);
 textSize(40)
 text("600",407,540);
 textSize(40)
 text("600",487,540);
 textSize(40)
 text("600",567,540);
 textSize(40)
 text("300",647,540);
 textSize(40)
 text("300",727,540);

  Engine.update(engine);
  if(gameState==="end"){
    fill("red")
    textSize(100);
   text("Game Over",100,340);
 }

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (particle!=null) {
    particle.display();
  
    if (particle.body.position.y>760) {
  
      if (particle.body.position.x<300) {
        score=score+100;
        particle=null;
  
        if (count>=5) gameState="end";
  
        }
        else if(particle.body.position.x<600 && particle.body.position.x>301){
          score=score+600
          particle=null;

        if (count>=5) gameState="end";
        }
         else if(particle.body.position.x<900 && particle.body.position.x>601){
          score=score+300
          particle=null;

         if (count>=5) gameState="end";
         }
  
        } 
      }
  
    }
  



    function mousePressed(){
      if(gameState!=="end")
      {
        count++;
        particle=new Particle(mouseX, 10,10, 10);
      }  
    }


