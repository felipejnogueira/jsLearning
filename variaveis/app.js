/* Variaveis
    1. var - permite redeclarar com mesmo nome
    2. let - variavel fixa e unica
*/

// String
var meuNome = 'Felipe';

// Number
var minhaIdade = 29;

// Boolean
var estouVivo = true;
var teste = 6 < 3;

// Arrays
var meuNomeArray = ['Felipe', 'Julio', 'Carlos'];
var meuNumeroArray = [19, 23, 01];

// Objeto
var cachorro = {nome: 'Totó', raca: 'Dálmata'};

// Constantes
const diasNaSemana = 7;
const horasNoDia = 24;


function logNome() {
    console.log(meuNome);
    console.log(meuNome[0]);    // substring
    console.log(minhaIdade);
    console.log(meuNomeArray[0])
    console.log(meuNumeroArray[1]);
    console.log(cachorro.nome);
    console.log(cachorro.raca);

}

logNome();

var button = document.querySelector('button');

button.onclick = function() {
    var nome = prompt('Qual seu nome?');
    alert('Olá ' + nome + ', é um prazer te ver!');
}
