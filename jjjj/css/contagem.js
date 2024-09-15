// Obtém a referência para o elemento do subtítulo
var subtitulo = document.getElementById("subtitulo");

// Define o número inicial de vagas disponíveis
var vagasDisponiveis = 90;

// Função que atualiza o texto do subtítulo com o número de vagas restantes
function atualizarVagas() {
  // Calcula o número de vagas restantes
  vagasDisponiveis--;
  var vagasRestantes = Math.max(0, vagasDisponiveis - 10);

  // Atualiza o texto do subtítulo de acordo com o número de vagas restantes
  if (vagasRestantes == 0) {
    subtitulo.textContent = "(As vagas se esgotaram!)";
  } else if (vagasRestantes == 1) {
    subtitulo.textContent = "Apenas 1 vaga restante";
  } else {
    subtitulo.textContent = "(Atenção: restam apenas " + vagasRestantes + " vagas)";
  }
}

// Inicia a contagem regressiva
atualizarVagas();
setInterval(atualizarVagas, 10000); // chama a função atualizarVagas a cada segundo (10000 ms) vale 10 Segundos



