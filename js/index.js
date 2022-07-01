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
let dbolinha= 15;
let raio = dbolinha/2;

//VELOCIDADE DA BOLINHA
let sxbolinha= 5;
let sybolinha= 5;

//VARÍAVEIS RAQUETE
let xraquete = 5;
let yraquete = 125;
let craquete = 5;
let araquete = 75; 

//VARÍAVEIS CPU
let xraquetecpu = 584;
let yraquetecpu = 125;
let sraquetecpu;

//PLACAR 
let pontos = 0;
let pontoscpu = 0;


function setup() {
    var myCanvas = createCanvas(600, 300);
    myCanvas.parent("fundinho");
  }
  
  function draw() {
    background(0);
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
    } 
}
function colisaoraquetecpu(){
    if (xbolinha + raio > xraquetecpu && ybolinha + raio < yraquetecpu + araquete && ybolinha + raio > yraquetecpu){
        sxbolinha*=-1;
    } 
}
function moveraquetecpu(){
    sraquetecpu = ybolinha - yraquetecpu - craquete / 2 - 30;
    yraquetecpu += sraquetecpu;
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
    }
    if (xbolinha < 10){
        pontoscpu += 1;
    }
}
