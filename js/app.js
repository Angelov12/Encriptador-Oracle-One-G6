let textoent = document.querySelector(".texto-entradajs");
let textosal = document.querySelector(".texto-salida");
let quitarimg = document.querySelector(".quitarimg");
let quitarh2 = document.querySelector(".quitarh2");

let llaveEncriptar = [
  ["i", "imes"],
  ["a", "ai"],
  ["e", "enter"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnEncriptar() {
  const tieneMayusculas = /[A-Z]/.test(textoent.value);
  const tieneCaracteresEspeciales = /[^a-z\s]/.test(textoent.value);
  const tieneEspacios = /^[\s]*$/.test(textoent.value);
  if (tieneEspacios) {
    textoent.value = "";
  } else if (tieneCaracteresEspeciales || tieneMayusculas) {
    alert("Solo letras Minúsculas y sin acentos o caracteres.");
  } else if (textoent.value != "") {
    let texto = encriptarTexto(textoent.value);
    textosal.value = texto;
    textosal.innerHTML = texto;
    quitarimg.remove();
    quitarh2.remove();
    textoent.value = "";
  } else {
    alert("Por favor ingrese el texto que desea encriptar.");
  }
}

function btnDesencriptar() {
  const tieneMayusculas = /[A-Z]/.test(textoent.value);
  const tieneCaracteresEspeciales = /[^a-z\s]/.test(textoent.value);
  const tieneEspacios = /^[\s]*$/.test(textoent.value);
  if (tieneEspacios) {
    textoent.value = "";
  } else if (tieneCaracteresEspeciales || tieneMayusculas) {
    alert("Solo letras Minúsculas y sin acentos o caracteres.");
  } else if (textoent.value != "") {
    let texto = desencriptarTexto(textoent.value);
    textosal.value = texto;
    textosal.innerHTML = texto;
    quitarimg.remove();
    quitarh2.remove();
  } else {
    alert("Por favor ingrese el texto que desea desencriptar.");
  }
}
function VerificarMinusculas() {
  let regex = /^([a-z\s])+$/;
  let minusculas = regex.test(textoent.value);

  if (minusculas) {
    btnDesencriptar();
  } else {
    alert("Por favor, digite apenas letras minúsculas e sem acento.");
  }
}
function encriptarTexto(frase) {
  llaveEncriptar.forEach((par) => {
    let regex = new RegExp(par[0], "g");
    frase = frase.replace(regex, par[1]);
  });

  return frase;
}

function desencriptarTexto(frase) {
  llaveEncriptar.forEach((par) => {
    let regex = new RegExp(par[1], "g");
    frase = frase.replace(regex, par[0]);
  });
  return frase;
}
