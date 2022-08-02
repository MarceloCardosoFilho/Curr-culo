function setup() {
    var myCanvas2 = createCanvas(600, 350)
   myCanvas2.parent("freeway");
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

