//IMAGENS
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

//SOM
let somDaTrilha;
let somDaColisao;
let somDoPonto;



function preload(){
    imagemDaEstrada = loadImage("fotos/estrada.png");
    imagemDoAtor = loadImage("fotos/ator-1.png");
    imagemDoCarro1 = loadImage("fotos/carro-1.png");
    imagemDoCarro2 = loadImage("fotos/carro-2.png");
    imagemDoCarro3 = loadImage("fotos/carro-3.png");
    somDaTrilha = loadSound("sons/trilhafree.mp3");
    somDaColisao = loadSound("sons/colidiu.mp3");
    somDoPonto = loadSound("sons/pontos.wav");
    
    imagemDosCarros = [imagemDoCarro1,imagemDoCarro2,imagemDoCarro3,imagemDoCarro1, imagemDoCarro2, imagemDoCarro3,imagemDoCarro1, imagemDoCarro2, imagemDoCarro3,imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];
}