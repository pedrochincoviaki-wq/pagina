// Obtém o elemento do botão pelo seu ID
const meuBotao = document.getElementById('meuBotao');

// Obtém o elemento do parágrafo pelo seu ID
const mensagem = document.getElementById('mensagem');

// Adiciona um "ouvinte" de evento de clique ao botão
meuBotao.addEventListener('click', function() {
    // Quando o botão for clicado, muda o texto do parágrafo
    mensagem.textContent = 'Você clicou no botão! Parabéns por criar sua primeira página!';
});
