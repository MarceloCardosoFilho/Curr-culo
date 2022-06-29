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
console.log("Olá, se você está lendo essa mensagem, eu sei que você não é uma pessoa comum...");

let a,b,c,ab,ac,bc;

a=1;
b=2;
c=3;

ab = a + b;
ac = a + c;
bc = b + c;

console.log(bc);
  
