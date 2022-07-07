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
/*======================================================================================
//VARIÁVEIS BOLINHA
let xbolinha= 400;
let ybolinha= 160;
let dbolinha= 25;
let raio = dbolinha/2;

//VELOCIDADE DA BOLINHA
let sxbolinha= 6;
let sybolinha= 4;

//VARÍAVEIS RAQUETE
let xraquete = 10;
let yraquete = 125;
let craquete = 15;
let araquete = 75; 

//VARÍAVEIS CPU
let xraquetecpu = 775;
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
    var myCanvas = createCanvas(800, 300);
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
    raqueteBorda()
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
         yraquete -=10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yraquete +=10;
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
    if (xbolinha + raio > xraquetecpu && 
        ybolinha + raio < yraquetecpu + araquete && 
        ybolinha + raio > yraquetecpu){
        sxbolinha *=-1;
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
      chanceDeErrar += 100;
      if (chanceDeErrar >= 100){
      chanceDeErrar = 101;
      }
    } else {
      chanceDeErrar -= 1;
      if (chanceDeErrar <= 35){
      chanceDeErrar = 30;
      }
    }
  }

function mostrarplacar(){
    textSize(36);
    textAlign(CENTER);
    fill(255,165,0)
    rect(520,20,60,35);
    rect(220,20,60,35);
    fill(255);
    text(pontos, 250, 50);
    text(pontoscpu, 550,50);
}

function marcaponto(){
    if (xbolinha > 780){
        pontos += 1;
        ponto.play();
        ponto.setVolume(0.2);
        xbolinha = 400;
        sxbolinha +=1;
        sybolinha +=1;
}

    if (xbolinha < 20){
        pontoscpu += 1;
        ponto.play();
        ponto.setVolume(0.2);
        xbolinha = 400;
    }
}


function raqueteBorda(){
    if (yraquete > 225){
    yraquete = 225;
    } 
    if (yraquete < 0){
    yraquete = 0;
    }
    if (yraquetecpu > 225) {
        yraquetecpu = 225;
    }
    if (yraquetecpu < 0){
      yraquetecpu= 0 ;
    }
  }
*/
  /*======================================================================================*/
function setup() {
   createCanvas(600, 352);
   somDaTrilha.loop(); 
   somDaTrilha.setVolume(0.06);
}
  
function draw() {
    background(imagemDaEstrada);
    showAtor();
    moveAtor();
    showCarro();
    moveCarro();
    voltaCarro();
    verificaColisao();
    incluiPontos();
    marcaPontos();
}




