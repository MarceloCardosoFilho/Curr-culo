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