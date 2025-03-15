let contador = 0;
botao.click( () => {
  contador++;
  if (contador < 10) {
    conteudo.html(`<p>O botão foi clicado ${contador} vezes!</p>`);
  } else if (contador < 16){
    $(".conteudo p").html(`<p>O botão foi clicado ${contador} vezes! Por favor, pare!</p>`);
    $(".conteudo h1").text("TESTE");
    $("#meuBotao").text("Não clique aqui!");
    $("#meuBotao").css({
        "position": "absolute",
        "top": `${contador**2}px`
    });
  } else {
    let aviso = $("<h1>", {
        text: "PARE!!!",
        css: {
            "font-size": "20em",
            "color": "yellow"
        }
    });
    $("body").css("background-color", "red");
    $("body").html(aviso);
  }
});
