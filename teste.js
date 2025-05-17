// variaveis da animacao
let angulo = 0;
let escala = 1;
let planetaAngulo = 0;

// raio de orbita e cor do planeta
let orbitRadius = 150;
let corPlaneta;

let formaPlaneta = "elipse";

// botões
let planetaVermelho, planetaVerde, planetaAzul;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);

    // cor do planeta
    corPlaneta = color(100, 200, 255);

    // botao de marte
    planetaVermelho = createButton('Quadrado');
    planetaVermelho.position(10, 10);
    planetaVermelho.style('background-color', '#ff4d4d');
    planetaVermelho.mousePressed(() => {
        corPlaneta = color(255, 0, 0);
        formaPlaneta = "quadrado";
    });

    // botao de terra
    planetaVerde = createButton('Círculo');
    planetaVerde.position(100, 10);
    planetaVerde.style('background-color', '#33cc33');
    planetaVerde.mousePressed(() => {
        corPlaneta = color(0, 200, 0);
        formaPlaneta = "elipse";
    });

    // botao de netuno
    planetaAzul = createButton('Elipse');
    planetaAzul.position(190, 10);
    planetaAzul.style('background-color', '#3399ff');
    planetaAzul.mousePressed(() => {
        corPlaneta = color(50, 150, 255);
        formaPlaneta = "elipsePreenchida";
    });
}

function draw() {
    background(10, 10, 30);

    // o sol
    push();
    translate(300, 300);
    rotate(angulo);
    noStroke();
    fill(255, 204, 0);
    ellipse(0, 0, 100, 100);
    pop();

    // gira o sol
    angulo += 1;

    // calcula posição do planeta
    let planetX = 300 + cos(planetaAngulo) * orbitRadius;
    let planetY = 300 + sin(planetaAngulo) * orbitRadius;
    
    // desenha órbita
    noFill();
    stroke(100);
    ellipse(300, 300, orbitRadius * 2);
    
    // desenha planeta com forma diferente
    push();
    translate(planetX, planetY);
    fill(corPlaneta);
    noStroke();

    if (formaPlaneta === "quadrado") {
        rectMode(CENTER);
        rect(0, 0, 40, 40);
    } else if (formaPlaneta === "elipsePreenchida") {
        ellipse(0, 0, 50, 35);
    } else {
        ellipse(0, 0, 40, 40);
    }
    pop();

    // rotação do planeta
    planetaAngulo += 1.5;

    // tutorial
    noStroke();
    fill(255);
    textSize(14);
    text("Clique na tela para mover o planeta e nos botões em cima para mudar de planeta", 10, height - 40);
}

function mousePressed() {
    let d = dist(mouseX, mouseY, 300, 300);
    let minRadius = 80;
    let maxRadius = 250;
    orbitRadius = constrain(d, minRadius, maxRadius);
}
