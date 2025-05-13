// variaveis da animacao
let angle = 0;
let scaleFactor = 1;
let dir = 1;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);

  // carinha feliz
  drawManoFeliz(60, 60, 100); // (x, y, tamanho)

  // animacao quadrado
  translate(width / 2, height / 2); 

  push();

  rotate(angle);
  scale(scaleFactor);

  fill(200, 100, 255);
  stroke(0);
  strokeWeight(2);
  rect(0, 0, 100, 100);

  pop();

  angle += 0.02 * dir;

  // aumenta tamanho com mouse
  if (mouseIsPressed) {
    scaleFactor += 0.01;
    if (scaleFactor > 2) {
      scaleFactor = 1;
    }
  }
}

// roda lado da seta quando apertado
function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    dir *= -1;
  }
}

// desenho carinha feliz
function drawManoFeliz(x, y, size) {
  fill(255, 230, 0);
  stroke(0);
  strokeWeight(2);
  ellipse(x, y, size, size);

  // olhos
  fill(0);
  let eyeOffsetX = size * 0.15;
  let eyeOffsetY = size * -0.1;
  ellipse(x - eyeOffsetX, y + eyeOffsetY, 10, 10);
  ellipse(x + eyeOffsetX, y + eyeOffsetY, 10, 10);

  // sorriso
  noFill();
  strokeWeight(3);
  arc(x, y + size * 0.1, size * 0.4, size * 0.3, 0, PI);
}
