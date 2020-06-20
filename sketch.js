var rainDrop, rand;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
rand = randomNumber(5,400)

  for(var rainDrop = 50; rainDrop<200; rainDrop ++){
    var rainDrop =  createSprite(400, 200, 50, 50);
  }

  rainDrop.x = rand;
  rainDrop.y = rand;
  drawSprites();
}