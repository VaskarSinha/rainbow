var nothing
function setup() {
  createCanvas(1260,608);
  nothing = createSprite(200,304,400,608);
  nothing.shapeColor = "white";
  nothing2 = createSprite(620,304,450,608);
  nothing2.shapeColor = "white";
}


function draw() 
{
 
  if(keyIsDown(RIGHT_ARROW)){
    background("red");
     nothing.shapeColor="yellow";
     nothing2.shapeColor="lightgreen"; 
    }
if(keyIsDown(LEFT_ARROW)){
  background("yellow"); 
nothing.shapeColor="orange";
nothing2.shapeColor="red"; 
  }
  if(keyIsDown(UP_ARROW)){
    background("lightblue")  
    nothing.shapeColor="red";
    nothing2.shapeColor="yellow";
    }
    if(keyIsDown(DOWN_ARROW)){
      background("lightgreen")  
      nothing.shapeColor="lightblue";
      nothing2.shapeColor="orange";
      }
      
drawSprites();
}
function mousePressedOver(){
  background("brown")
}


