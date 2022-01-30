let btn = document.getElementById('btn');

let nota1; let peso1;
let nota2; let peso2;
let nota3; let peso3;
let nota4; let peso4;
let nota5; let peso5;

let resultado;

function calcular(){
    nota1 = parseFloat(document.getElementById('nota1').value);
    nota2 = parseFloat(document.getElementById('nota2').value);
    nota3 = parseFloat(document.getElementById('nota3').value);
    nota4 = parseFloat(document.getElementById('nota4').value);
    nota5 = parseFloat(document.getElementById('nota5').value);

    peso1 = parseFloat(document.getElementById('peso1').value);
    peso2 = parseFloat(document.getElementById('peso2').value);
    peso3 = parseFloat(document.getElementById('peso3').value);
    peso4 = parseFloat(document.getElementById('peso4').value);
    peso5 = parseFloat(document.getElementById('peso5').value);

    resultado = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3 + nota4 * peso4 + nota5 * peso5)/ (peso1 + peso2 + peso3 + peso4 + peso5);

    if(resultado){

        document.getElementById('notafinal').innerHTML = resultado;

    } else {alert('👋 Por favor, complete todos os campos.')}
}

btn.addEventListener("click", calcular);