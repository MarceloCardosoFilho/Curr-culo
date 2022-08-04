//VARIÁVEIS BOLINHA
let xbolinha= 400;
let ybolinha= 160;
let dbolinha= 25;
let raio = dbolinha/2;

//VELOCIDADE DA BOLINHA
let sxbolinha= 6;
let sybolinha= 4;

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