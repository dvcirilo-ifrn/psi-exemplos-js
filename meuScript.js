const botao = document.getElementById("meuBotao");
const conteudo = document.querySelector(".conteudo p");
const header1 = document.querySelector(".conteudo h1")
let contador = 0;
botao.addEventListener("click", () => {
  contador++;
  if (contador < 10) {
    conteudo.innerHTML = `<p>O botão foi clicado ${contador} vezes!</p>`;
  } else if (contador < 16){
    conteudo.innerHTML = `<p>O botão foi clicado ${contador} vezes! Por favor, pare!</p>`;
    header1.innerText = "TESTE";
    botao.innerText = "Não clique aqui!";
    botao.style.position = "absolute";
    botao.style.top = `${contador**2}px`;
  } else {
    const aviso = document.createElement('h1');
    aviso.innerText = "PARE!!!";
    aviso.style.fontSize = "20em";
    aviso.style.color = "yellow";
    document.body.style.backgroundColor = "red"
    document.body.replaceChildren(aviso);
  }
});
