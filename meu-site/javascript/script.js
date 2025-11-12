// VARIAVEIS GLOBAIS
// armazenam valores para serem usados por todo o programa
// e compartilhados por varias funcoes

const acertos = 0; // quantidade de acertos do jogador
const perdidos = 0; // quantidade de toupeiras que o jogador deixou passar
const errados = 0; // quantidade de marteladas dadas fora das toupeiras
const intervalo = 5000; // Intervalo entre o aparecimento das toupeiras (valor inicial igual a 5000, indicando um intervalo de 5000 milissegundos, ou seja, 5 segundos entre os aparecimentos das toupeiras).
const janela = 2000; // Janela de tempo que o jogador tem para acertar na toupeira (valor inicial de 2000, indicando 2000 milissegundos, ou 2 segundos, que será o tempo que a toupeira ficará fora do buraco).

// EVENTOS
/* 

load (onload): o evento load, associado ao atributo onload, acontece quando um elemento HTML termina de ser carregado pelo navegador. Será usado o evento load na página para iniciar o script. Essa é uma boa prática, pois evita que o programa comece antes de todos os elementos HTML serem carregados. Se o script tentar acessar algum elemento HTML que ainda não está disponível, vai disparar uma exceção (erro).
click (onclick): o evento click, associado ao atributo onclick, acontece quando o usuário clica com o botão esquerdo do mouse em um elemento HTML. Esse evento será usado em duas situações distintas: (1) associado ao botão Start, para começar o jogo quando o usuário clicar no botão; e (2) associado a cada um dos cinco buracos do gramado, para realizar a contabilidade do jogo.
mousedown (onmousedown): o evento mousedown, associado ao atributo onmousedown, acontece quando o usuário mantém pressionado o botão esquerdo do mouse. Sempre que o cursor do mouse estiver sobre o gramado e o usuário apertar o botão esquerdo, mantendo-o pressionado, o cursor será alterado para um martelo abaixado, simbolizando uma martelada.
mouseup (onmouseup): o evento mouseup, associado ao atributo onmouseup, acontece quando o usuário solta o botão esquerdo do mouse, depois de tê-lo pressionado. Quando o cursor do mouse estiver sobre o gramado e o usuário liberar o botão esquerdo, devemos trocar o cursor para um martelo levantado, indicando que o usuário levantou o martelo.

*/

// Associar eventos a elementos HTML

/*
Uma maneira mais moderna de associar eventos é usar o método addEventListener. Esse método permite adicionar um listener a um elemento HTML de forma mais flexível.

Por exemplo, pode-se usar o JavaScript para adicionar um evento click a um botão identificado por idButton

De forma mais compacta, pode-se também criar uma função anônima ao associar o evento

*/

/*
Para adicionar um listener a um elemento HTML, deve-se trazer o elemento HTML para o mundo JavaScript. O objeto document representa o documento HTML com todos os seus elementos. Esse objeto tem o método getElementById, que, como o nome sugere, pega um elemento HTML pela sua identificação.

*/

onload = function () {
    document.getElementById('start').addEventListener('click', start);
    document.getElementById('idGramado').addEventListener('mousedown', marteloBaixo);
    document.getElementById('idGramado').addEventListener('mouseup', marteloCima);
    document.getElementById('buraco0').addEventListener('click', martelada);
    document.getElementById('buraco1').addEventListener('click', martelada);
    document.getElementById('buraco2').addEventListener('click', martelada);
    document.getElementById('buraco3').addEventListener('click', martelada);
    document.getElementById('buraco4').addEventListener('click', martelada);
} // associa a função anônima descrita logo a seguir ao evento load da janela.

/*

Em JavaScript, o objeto que representa a janela do navegador se chama window, e é o objeto default (padrão). Isso significa que não é necessário escrever o nome do objeto, ou seja, a linha 15 é equivalente a escrever:

window.onload = function() {
    ...
}

*/

function start () {
    let botaoStart = document.getElementById('start');

    botaoStart.removeEventListener('click', start); // remover o evento do botão Start para que o usuário não possa inicializar o jogo várias vezes;
    botaoStart.disable = true;
    sobeToupeira();
}

/*
A função que irá mostrar a toupeira em um buraco deve escolher aleatoriamente um dos cinco buracos e colocar a imagem do buraco com a toupeira no lugar da imagem do buraco sem a toupeira.
depois, a função deve ativar dois temporizadores (timers): um para remover a toupeira do buraco e o outro para subir a próxima toupeira.

*/

function sobeToupeira() {
    let buraco = Math.floor(Math.random() * 5); // floor arredonda o numero escolhido no intervalo para baixo
    let objBuraco = document.getElementById('buraco' + buraco); // ele concatena o numero aleatorio obtido com a palavra buraco, formando o id dos buracos (buraco0, buraco1, buraco2, buraco3, buraco4). Armazena a referência desse elemento na variável objBuraco
    objBuraco.src = 'images/hole-mole.png'; // altera o atributo src da imagem (tag img) pela imagem com a toupeira (hole-mole.png)
    timer = setTimeout(tiraToupeira, janela, buraco);
    setTimeout(sobeToupeira, intervalo);
}

