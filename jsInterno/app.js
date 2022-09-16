// Cria um novo parágrafo e insere no fim do HTML
function criarParagrafo() {
    let para = document.createElement('p');
    para.textContent = 'Você clicou no botão!';
    document.body.appendChild(para);
}

/*
    1. Captura referencias de todos os botoes na pagina e armazena em array.
    2. Vai até todos os botões e adiciona um event listener click a cada um deles.

    Quando cada botão é clicado, a função criarParagrafo() será executada.
*/
const botoes = document.querySelectorAll('button');

for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', criarParagrafo);
}
