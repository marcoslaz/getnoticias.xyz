

// Função Cookies do Botão
function mostrarBotao() {
  var divBotao = document.getElementById("div-botao");
  divBotao.style.display = "block";
}

var botaoApareceu = getCookie("botaoApareceu");

if (botaoApareceu == null) {
  setCookie("botaoApareceu", "true", 7);
  setTimeout(mostrarBotao, 0);
} else {
  mostrarBotao();
}



function setCookie(nome, valor, dias) {
  var data = new Date();
  data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
  var expires = "expires=" + data.toUTCString();
  document.cookie = nome + "=" + valor + ";" + expires + ";path=/";
}

function getCookie(nome) {
  var nomeCookie = nome + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookies = decodedCookie.split(';');
  for(var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(nomeCookie) == 0) {
      return cookie.substring(nomeCookie.length, cookie.length);
    }
  }
  return null;
}