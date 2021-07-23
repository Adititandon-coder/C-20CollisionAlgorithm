var fixedRect, movingRect;

function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(400, 200, 30, 70);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(500, 100, 70, 30);
  movingRect.shapeColor = "green";
}

function draw() {
  background("lightblue");
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}
