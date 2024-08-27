let resposta = document.querySelector(".resposta");
resposta.innerHTML = "Sem nenhum texto...";
let botaoCopiar = document.querySelector(".copiar");
let texto = document.querySelector(".texto");
function criptografar() {
  let conteudoTexto = texto.value;
  const criptografado = conteudoTexto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  resposta.innerHTML = criptografado;
  botaoCopiar.style.display = "block";
}

function descriptografar() {
  let conteudoTexto = texto.value;
  const descriptografado = conteudoTexto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  resposta.innerHTML = descriptografado;
  botaoCopiar.style.display = "block";
}

async function copiar() {
  await navigator.clipboard.writeText(resposta.innerHTML);
  botaoCopiar.style.display = "none";
  resposta.innerHTML = "Sem nenhum texto...";
}
