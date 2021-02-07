var sword,swordImage;
var fruit1, fruit2, fruit3, fruit4;
var monster;
var monster2,monsterImage1,monsterImage2;
var fruitGroup,enemyGroup;
var gameover,gameoverImage;
var score=0;
var PLAY=1;
var END=0;
var gameState=1;
var rand;
var knifeSwooshSound,gameoverSound;


function preload() {
  //preload images
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage1 = loadImage("alien1.png");
  monsterImage2 = loadImage("alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png")
  
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3")
  gameoverSound=loadSound("gameover.mp3")
  
}
function setup() {
  
  createCanvas(600,600);
  
  sword = createSprite(100,200,20,20);  
  sword.scale=0.72;
  sword.addImage(swordImage);
  
  
  fruitGroup = new Group();
  enemyGroup = new Group();
  
}


function draw() {
  background("cyan");
  
  if(gameState === PLAY){
 
  Enemys();
  fruits();
     
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
     
   if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
     knifeSwooshSound.play()
    score=score+5;
   }
     
   else if(enemyGroup.isTouching(sword)) {
      
      gameState = END;
    
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.velocityX=0;
      enemyGroup.velocityX=0;
      sword.addImage(gameoverImage);
      sword.scale=1.5;
      sword.x=300;
      sword.y=300;
      gameoverSound.play()
   }
    
  }
  
  drawSprites();
  
  text("Score : " + score,500,50);
  
}


function fruits() {
  
  if(World.frameCount%80===0){ 
   fruit=createSprite(600,200,20,20);
   fruit.scale=0.2;
   
   rand=Math.round(random(1,4)); 

     if(rand == 1) {
      fruit.addImage(fruit1);
     } 
     else if (rand == 2){
      fruit.addImage(fruit2)
     } 
     else if (rand == 3){
      fruit.addImage(fruit3)
     } 
     else if (rand == 4){
      fruit.addImage(fruit4)
     }

     fruit.y=Math.round(random(50,340));
     fruit.velocityX=-7;
     fruit.setlifetime=200;

     fruitGroup.add(fruit);
    
    position=Math.round(random(1,2))
    fruit=createSprite(600,200,20,20)
    if(position==1)
      {
        fruit.x=400;
        fruit.velocityX=-(7)
      }
  }
  
}
  

function Enemys() {
  
   if(World.frameCount%200 === 0) { 
     
     monster=createSprite(600,200,20,20);
     monster.addImage("moving", monsterImage1);
     monster.y=Math.round(random(25,275)); 
     monster.velocityX=-8;
     monster.setlifetime=50;

     enemyGroup.add(monster);  

   }
  
   if(World.frameCount%200 === 0) {
     
     monster2=createSprite(800,200,20,20);
     monster2.addImage("moving2", monsterImage2);
     monster2.y=Math.round(random(325,575));
     monster2.velocityX=-8;
     monster2.setlifetime=50;

     enemyGroup.add(monster2);
     
   }
   
}