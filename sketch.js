let rez = 30;
let food;
let w;
let h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(8);
  snake = new Snake();
  foodLocation();
}

function draw() {
  background(200);
  scale(rez);

  if (snake.eat(food)) {
    foodLocation();
    snake.grow();
    snake.changeLen(5);
    console.log(snake.len);
  }

  snake.update();
  snake.show();

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      snake.setDir(-1, 0);
      break;
    case RIGHT_ARROW:
      snake.setDir(1, 0);
      break;
    case UP_ARROW:
      snake.setDir(0, -1);
      break;
    case DOWN_ARROW:
      snake.setDir(0, 1);
      break;
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
