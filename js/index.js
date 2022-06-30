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
//VARIÁVEIS
let xbolinha= 300;
let ybolinha= 240;
let dbolinha= 15;
let raio = dbolinha/2;

//VELOCIDADE DA BOLINHA
let sxbolinha= 8;
let sybolinha= 8;


function setup() {
    createCanvas(800, 600);
  }
  
  function draw() {
    background(0);
    showbolinha();
    movebolinha();
    colisaoborda();
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

