var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoAlto = document.querySelector('.baixoAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;
campoPalpite.focus();

function conferirPalpite() {
    // var de palpite do usuario
    var palpiteUsuario = Number(campoPalpite.value);

    // verifica se é primeiro palpite e adiciona texto a paragrafo de palpites
    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';
    }

    palpites.textContent += palpiteUsuario + ' ';

    // se acertou o palpite
    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        baixoAlto.textContent = '';
        configFimDeJogo();
    // se estorou número de palpites
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
    // adiciona palpite incorreto
    } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';

        // informa se palpite foi baixo ou alto em relação ao número a ser adivinhado
        if (palpiteUsuario < numeroAleatorio) {
            baixoAlto.textContent = 'Seu palpite está baixo!';
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoAlto.textContent = 'Seu palpite está muito alto!';
        }
    }

    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}

// Adicionando evento de click no botão de enviar palpite
envioPalpite.addEventListener('click', conferirPalpite);


// Prepara tela para novo jogo
function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disable = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo)
}

// Config de novo jogo
function reiniciarJogo() {
    // Reset na contagem
    contagemPalpites = 1;

    // Loop nos paragrafos dentro da classe '.resultadoParas' zerando o texto
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0; i < reiniciarParas.lenght; i++) {
        reiniciarParas[i].textContent = '';
    }

    // Remove botao de restart
    botaoReinicio.parentNode.removeChild(botaoReinicio);

    // Reset no campo de palpite
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

