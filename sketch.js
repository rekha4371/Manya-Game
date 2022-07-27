var PLAY = 1;
var END = 0;
var gameState = PLAY;

var fruitGroup,banana,pineapple,grapes,watermelon;
var monkey1
var monkey

var bombGroup, bomb1,bomb3,bomb4
 function preload(){

  monkeyImg = loadAnimation("tile000.png","tile001.png","tile002.png",
  "tile003.png","tile004.png","tile005.png","tile006.png","tile007.png","tile008.png",
  "tile009.png","tile010.png","tile011.png","tile012.png");

  backgroundImg = loadImage("jungle.png")

  bananaImg = loadImage("banana.png")
  pineappleImg = loadImage("pineapple.png")
  grapesImg = loadImage("grapes.png")
  watermelonImg = loadImage("watermelon.png")

  bomb1Img = loadImage("bomb1.png")
  bomb2Img = loadImage("bomb2.png")
  bomb3Img = loadImage("bomb3.png")
  bomb4Img = loadImage("bomb4.png")
}

function setup()
{
  createCanvas(600,340);

    bg = createSprite(200,240)
    bg.addImage(backgroundImg)
    bg.scale = 1.6

    monkey = createSprite(80,300,20,50)
    monkey.debug=false;
    monkey.addAnimation("monking_running",monkeyImg)
    monkey.scale = 1
   
    monkey.setCollider("rectangle",0,0,50,50)

     ig = createSprite(220,340,600,20)
     ig.visible=false
}

function draw(){
background("blue");
  
bg.velocityX =3
if(bg.x>500){
    bg.x=100
}
    if(keyDown("space")&& monkey.y >=100) {
      monkey.velocityY = -13;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ig)
  
   fruits()
   bombs() 
    
  drawSprites()
   
  }

  function fruits(){
    if(frameCount % 60 === 0){
      fruit = createSprite(500,200,50,50)
      fruit.velocityX=-3;
       fruit.y=Math.round(random(50,300))
      var rand = Math.round(random(1,4))
      switch(rand){
        case 1: fruit.addImage(bananaImg);
        fruit.scale=0.08
        break;
        case 2: fruit.addImage(pineappleImg);
        fruit.scale=0.08
        break;
        case 3: fruit.addImage(grapesImg);
        fruit.scale=0.08
        break;
        case 4: fruit.addImage(watermelonImg);
        fruit.scale=0.08
        break;
        default:break
      }
    }
    }
    
    function bombs(){
      if(frameCount % 120 === 0){
        bomb = createSprite(500,150,50,50)
        bomb.velocityX=-3;
        bomb.scale=0.2
        var rand = Math.round(random(1,4))
        switch(rand){
          case 1: bomb.addImage(bomb1Img);
     
          break;
          case 2: bomb.addImage(bomb2Img);
         
          break;
          case 3: bomb.addImage(bomb3Img);
        
          break;
          case 4: bomb.addImage(bomb4Img);
        
          break;
          default:break
        }
      }
      }