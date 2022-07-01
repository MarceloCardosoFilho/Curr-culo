var btn = document.querySelector('#show');
var container = document.querySelector('.container');

btn.addEventListener('click', function() {
    
    if(container.style.display === 'block') {
       container.style.display = 'none'; 
    } else {
        container.style.display = 'block';
    }
});

function esconder(){
    var div = document.getElementById("teste");
    div.style.display = 'none';
}
/*======================================================================================*/
//VARIÁVEIS BOLINHA
let xbolinha= 300;
let ybolinha= 240;
let dbolinha= 20;
let raio = dbolinha/2;

//VELOCIDADE DA BOLINHA
let sxbolinha= 10;
let sybolinha= 3;

//VARÍAVEIS RAQUETE
let xraquete = 1;
let yraquete = 125;
let craquete = 10;
let araquete = 75; 

//VARÍAVEIS CPU
let xraquetecpu = 589;
let yraquetecpu = 125;
let sraquetecpu;
let chanceDeErrar = 0;

//PLACAR 
let pontos = 0;
let pontoscpu = 0;

//SONS
let ponto;
let raquetada; 
let trilha; 

function preload(){
    trilha = loadSound("sons/trilha.mp3");
    ponto = loadSound("sons/ponto.mp3");
    raquetada = loadSound("sons/raquetada.mp3");
}

function setup() {
    var myCanvas = createCanvas(600, 300);
    myCanvas.parent("fundinho");
    trilha.loop();
    trilha.setVolume(0.06);
}
  
  function draw() {
    background1();
    showbolinha();
    movebolinha();
    colisaoborda();
    showraquete(xraquete, yraquete);
    moveraquete();
    colisaoraquete();
    colisaoraquetecpu();
    showraquete(xraquetecpu, yraquetecpu);
    moveraquetecpu();
    mostrarplacar();
    marcaponto();
    calculaChanceDeErrar();
}

function background1(){
    background('green');
}

function showbolinha(){
    circle(xbolinha, ybolinha, dbolinha);
}

function movebolinha(){
    xbolinha += sxbolinha;
    ybolinha += sybolinha;
}

function colisaoborda(){
    if (xbolinha + raio > width || xbolinha - raio < 0){
        sxbolinha*=-1;
    } 
    if(ybolinha + raio > height || ybolinha - raio < 0){
        sybolinha*=-1;
    }   
}

function showraquete(x,y){
    rect(x, y, craquete, araquete);
}

function moveraquete(){
    if (keyIsDown(UP_ARROW)){
         yraquete -=8;
    }
    if (keyIsDown(DOWN_ARROW)){
        yraquete +=8;
   }
}

function colisaoraquete(){
    if (xbolinha - raio < xraquete + craquete && 
        ybolinha - raio < yraquete + araquete && 
        ybolinha + raio > yraquete){
        sxbolinha *= -1;
        raquetada.play();
        raquetada.setVolume(0.2)
    } 
}
function colisaoraquetecpu(){
    if (xbolinha + raio > xraquetecpu && ybolinha + raio < yraquetecpu + araquete && ybolinha + raio > yraquetecpu){
        sxbolinha*=-1;
        raquetada.play();
        raquetada.setVolume(0.2)
    } 
}
function moveraquetecpu(){
    sraquetecpu = ybolinha - yraquetecpu -craquete-50;
    yraquetecpu += sraquetecpu + chanceDeErrar;
}

function calculaChanceDeErrar() {
    if (pontoscpu >= pontos) {
      chanceDeErrar += 1;
      if (chanceDeErrar >= 39){
      chanceDeErrar = 40;
      }
    } else {
      chanceDeErrar -= 1;
      if (chanceDeErrar <= 35){
      chanceDeErrar = 35;
      }
    }
  }

function mostrarplacar(){
    textSize(36);
    textAlign(CENTER);
    fill(255,165,0)
    rect(420,20,60,35);
    rect(120,20,60,35);
    fill(255);
    text(pontos, 150, 50);
    text(pontoscpu, 450,50);
}

function marcaponto(){
    if (xbolinha > 590){
        pontos += 1;
        ponto.play();
        ponto.setVolume(0.2);
}

    if (xbolinha < 10){
        pontoscpu += 1;
        ponto.play();
        ponto.setVolume(0.2);
    }
}


