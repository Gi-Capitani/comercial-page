/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem correspondente ao botão

    -passo 1 - dar um jeito de pegar o elemento html dos botoes

    -passo 2 - dar um jeito de identificar o clique do usuário no botão

    -passo 3 - desmarcar o botão selecionado anterior

    -passo 4 - marcar o botão clicado como se estivesse selecionado

    -passo 5 - esconder a imagem de fundo anterior

    -passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// passo 1 - dar um jeitasso de pegar o elemento html dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const image = document.querySelectorAll('.imagem');

