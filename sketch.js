var fixedrect,movingrect
function setup() {
  createCanvas(1200,800);
  
 fixedrect =createSprite(200,200,50,80)
fixedrect.shapeColor="green"
 movingrect= createSprite(400,200,80,30)
movingrect.shapeColor="green"
gameobject1= createSprite(100,100,50,50)
gameobject1.shapeColor ="green"
gameobject2= createSprite(200,100,50,50)
gameobject2.shapeColor="green"
}

function draw() {
  background(0);  
 
 movingrect.x=World.mouseX
 movingrect.y=World.mouseY
 

if( istouching(movingrect,gameobject1)){


  movingrect.shapeColor= "red"
  gameobject1.shapeColor= "red"

}
else

{
  movingrect.shapeColor= "green"
  gameobject1.shapeColor= "green"
}
drawSprites();
}
