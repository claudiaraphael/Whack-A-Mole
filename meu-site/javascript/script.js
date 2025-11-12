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
}