//PLACAR 
let pontos = 0;
let pontoscpu = 0;

function mostrarplacar(){
    textSize(36);
    textAlign(CENTER);
    fill(255,165,0)
    rect(520,20,60,35);
    rect(220,20,60,35);
    fill(255);
    text(pontos, 250, 50);
    text(pontoscpu, 550,50);
}

function marcaponto(){
    if (xbolinha > 780){
        pontos += 1;
        ponto.play();
        ponto.setVolume(0.2);
        xbolinha = 400;
        sxbolinha +=1;
        sybolinha +=1;
}

    if (xbolinha < 20){
        pontoscpu += 1;
        ponto.play();
        ponto.setVolume(0.2);
        xbolinha = 400;
    }
}

function calculaChanceDeErrar() {
    if (pontoscpu >= pontos) {
      chanceDeErrar += 100;
      if (chanceDeErrar >= 100){
      chanceDeErrar = 101;
      }
    } else {
      chanceDeErrar -= 1;
      if (chanceDeErrar <= 35){
      chanceDeErrar = 30;
      }
    }
  }

