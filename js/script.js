//efeito do botão voltar ao Topo
function topo() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

//Validação de Login
function login() {
  var logado = 0;
  var usuario = document.getElementsByName("usuario")[0].value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementById("senha").value;
  senha = senha.toLowerCase();

  if (usuario == "admin" && senha == "123456") {
    window.location = "index.html";
    logado = 1;
  }
  if (logado == 0) {
    alert("Acesso Negado. Dados incorretos");
  }
}

//Ativar alert no botão cadastrar
function cadastro() {
  var cadastro = 0;

  var usuario = document.getElementsByName("cUsuario")[0].value;
  usuario = usuario.toLowerCase();

  var email = document.getElementsByName("cEmail").value;

  var senha = document.getElementById("cSenha").value;
  senha = senha.toLowerCase();

  if ((usuario == "admin", email == "admin@admin.com", senha == "123456")) {
    logado = 1;
    window.location = "index.html";
  } else {
    alert("Cadastro não realizado , dados incorretos!");
  }
}
