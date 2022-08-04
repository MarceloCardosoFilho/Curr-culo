function setup() {
    var myCanvas = createCanvas(800, 300);
    myCanvas.parent("pong");
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