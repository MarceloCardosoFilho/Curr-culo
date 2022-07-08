//ATOR
let xAtor = 100;
let yAtor = 325;
let colisao = false;
let meusPontos = 0;


function showAtor(){
    image(imagemDoAtor, xAtor,yAtor, 30, 30); 
}


function moveAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
        if(podemovery()){
            yAtor += 3;
        }
    }
    if (keyIsDown(LEFT_ARROW)){
        if (podemoverxl()){
            xAtor -= 3;
        }
    }
    if (keyIsDown(RIGHT_ARROW)){
        if (podemoverxr()){
            xAtor += 3;
        }
    }
}

function verificaColisao(){
    for(let i = 0; i < imagemDosCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], cCarros, aCarros, xAtor, yAtor, 15);
        if(colisao){
            voltaator();
            voltacarros();
            somDaColisao.play();
            if(sePontosMaiorQueZero()){
                meusPontos -= 1;
            }
        }
    }
}


function voltaator(){
    yAtor = 325;
}

function voltacarros(){
    for (let i = 0; i < imagemDosCarros.length; i++){
        xCarros = [650, 650, 650, 650, 650, 650, 1000, 1000, 1000, 1000, 1000, 1000];
    }
}

function incluiPontos(){
    textAlign(CENTER);
    fill(255,255,0)
    textSize(25);
    text(meusPontos, width/5, 25);
}

function marcaPontos(){
    if(yAtor < -15){
        meusPontos +=1;
        voltaator();
        voltacarros();
        somDoPonto.play();
     }
}

function sePontosMaiorQueZero(){
   return meusPontos > 0;
}

function podemovery(){
    return yAtor < 327;
}

function podemoverxl(){
    return xAtor > -1;
}

function podemoverxr(){
    return xAtor < 570;
}