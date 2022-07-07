//ATOR
let xAtor = 100;
let yAtor = 330;
let colisao = false;
let meusPontos = 0;


function showAtor(){
    image(imagemDoAtor, xAtor,yAtor,20,20); 
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
        colisao = collideRectCircle(xCarros[i], yCarros[i], cCarros, aCarros, xAtor,yAtor, 10);
        if(colisao){
            voltaator();
            somDaColisao.play();
            if(sePontosMaiorQueZero()){
                meusPontos -= 1;
            }
        }
    }
}


function voltaator(){
    yAtor = 330;
    xAtor = 100;
}

function incluiPontos(){
    textAlign(CENTER);
    fill(255,255,0)
    textSize(25);
    text(meusPontos, width/5, 25);
}

function marcaPontos(){
    if(yAtor < 10){
        meusPontos +=1;
        voltaator();
        somDoPonto.play();
    }
}

function sePontosMaiorQueZero(){
   return meusPontos > 0;
}

function podemovery(){
    return yAtor < 330;
}

function podemoverxl(){
    return xAtor > -1;
}

function podemoverxr(){
    return xAtor < 570;
}