//Códigos dos Carros
let xCarros = [650, 650, 650, 650, 650, 650, 1000, 1000, 1000, 1000, 1000, 1000];
let yCarros = [32,82,128,183,228,276, 32,82,128,183,228,276];
let sCarros = [7,3,4,2,5,1,7,3,4,2,5,1];
let cCarros = 50;
let aCarros = 40;


function showCarro(){
    for (let i = 0; i < imagemDosCarros.length; i++){
        image(imagemDosCarros[i], xCarros[i], yCarros[i],cCarros,aCarros);
    }
}

function moveCarro(){
    for (let i = 0; i < sCarros.length; i++){
        xCarros[i] -= (sCarros[i]+meusPontos/2) ;
    }       
}

function voltaCarro(){
    for(let i = 0; i < xCarros.length; i++){
        if(xCarros[i] < -50){
            xCarros[i] = 650;
        }
    }
}
