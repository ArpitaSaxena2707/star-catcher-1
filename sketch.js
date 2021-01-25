      var spaceimage,space;
      var redrocket,redrocketimage,bluerocket,blurrocketimage;
      var star,starimage;
      var r1,r2;
      
      function preload(){
        spaceimage=loadImage("images/space.jpg")
        redrocketimage=loadImage("images/red rocket.png")
        bluerocketimage=loadImage("images/blue rocket.png")
        starimage=loadImage("images/Star.png")
      }


         function setup() {
  createCanvas(1600,800);
 space=createSprite(800,400,1600,600)
 space.addImage(spaceimage);
 space.scale=6;
 redrocket=createSprite(500,700,20,20)
 redrocket.addImage(redrocketimage)
 redrocket.scale=0.04;
 bluerocket=createSprite(500,100,20,20)
bluerocket.addImage(bluerocketimage)
bluerocket.scale=0.25;
r1=random(20,1400)
r2=random(20,600)
star=createSprite(r1,r2,10,10)
star.addImage(starimage)
star.lifetime=150;
star.scale=0.3;

}

function draw() {
  background(255,255,255);
  if(keyDown("up")){
     redrocket.y=redrocket.y-10;
  }  
  if(keyDown("down")){
    redrocket.y=redrocket.y+10;
  }
  if(keyDown("left")){
    redrocket.x=redrocket.x-10;
  }
  if(keyDown("right")){
    redrocket.x=redrocket.x+10;
  }
  if(keyDown("w")){
    bluerocket.y=bluerocket.y-10;
  }
  if(keyDown("s")){
    bluerocket.y=bluerocket.y+10;
  }
  if(keyDown("a")){
    bluerocket.x=bluerocket.x-10;
  }
  if(keyDown("d") ){
    bluerocket.x=bluerocket.x+10;
  }
 

  drawSprites();
}
function stars(){
 
}