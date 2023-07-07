/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem correspondente ao botão

    -passo 1 - dar um jeito de pegar o elemento html dos botoes

    -passo 2 - dar um jeito de identificar o clique do usuário no botão

    -passo 3 - desmarcar o botão selecionado anterior

    -passo 4 - marcar o botão clicado como se estivesse selecionado

    -passo 5 - esconder a imagem de fundo anterior

    -passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// Obtém todos os botões com a classe "botoes-carrossel"
const botoes = document.querySelectorAll('.botoes-carrossel');

// Adiciona um ouvinte de eventos para cada botão
botoes.forEach(botao => {
  botao.addEventListener('click', exibirImagem);
});

function exibirImagem(event) {
  const target = event.target;
  const imagemId = target.getAttribute('data-target');
  const imagem = document.getElementById(imagemId);

  // Esconde todas as imagens
  const imagens = document.querySelectorAll('.carrossel');
  imagens.forEach(img => {
    img.style.display = 'none';
  });

  // Exibe a imagem correspondente ao botão clicado
  imagem.style.display = 'block';
}


 
