let btnClose = document.getElementById("btn-fechar");
let btnOpen = document.getElementById("btn-abrir");
let greenLight = document.getElementById("verde");
let yellowLight = document.getElementById("amarela");
let redLight = document.getElementById("vermelha");
let btnNormal = document.getElementById("btn-normal");
let btnNoturno = document.getElementById("btn-noturno");
let btnEmergencia = document.getElementById("btn-emergencia");
let timer1;
let timer2;
let interval1;
let modo;

function modoEmergencia() {
  greenLight.classList.remove("verde-ligada");
  yellowLight.classList.remove("amarela-ligada");
  redLight.classList.add("vermelha-ligada");
}

function modoNoturno() {
  clearInterval(interval1);
  greenLight.classList.remove("verde-ligada");
  redLight.classList.remove("vermelha-ligada");
  yellowLight.classList.add("amarela-ligada");

  interval1 = setInterval(() => {
    if (yellowLight.classList.contains("amarela-ligada")) {
      yellowLight.classList.remove("amarela-ligada");
    } else {
      yellowLight.classList.add("amarela-ligada");
    }
  }, 800);
}

function limpaTimer() {
  clearInterval(interval1);
  clearTimeout(timer1);
  clearTimeout(timer2);
}

modo = "Normal";

btnNormal.addEventListener("click", (e) => {
  limpaTimer();
  redLight.classList.remove("vermelha-ligada");
  greenLight.classList.add("verde-ligada");
  btnClose.classList.remove("botao-desabilitado");
  btnOpen.classList.remove("botao-desabilitado");
  btnNoturno.classList.remove("btn-modo-ativo");
  btnEmergencia.classList.remove("btn-modo-ativo");
  btnNormal.classList.add("btn-modo-ativo");
  modo = "Normal";
});

btnNoturno.addEventListener("click", (e) => {
  limpaTimer();
  btnNormal.classList.remove("btn-modo-ativo");
  btnEmergencia.classList.remove("btn-modo-ativo");
  btnNoturno.classList.add("btn-modo-ativo");
  btnClose.classList.add("botao-desabilitado");
  btnOpen.classList.add("botao-desabilitado");
  modo = "Noturno";
  modoNoturno();
});

btnEmergencia.addEventListener("click", (e) => {
  limpaTimer();
  btnNoturno.classList.remove("btn-modo-ativo");
  btnNormal.classList.remove("btn-modo-ativo");
  btnEmergencia.classList.add("btn-modo-ativo");
  btnClose.classList.add("botao-desabilitado");
  btnOpen.classList.add("botao-desabilitado");
  modo = "Emergencia";
  modoEmergencia();
});

btnClose.addEventListener("click", (e) => {
  if (modo == "Normal") {
    clearTimeout(timer1);
    clearTimeout(timer2);
    btnClose.classList.add("botao-desabilitado");
    greenLight.classList.remove("verde-ligada");
    yellowLight.classList.add("amarela-ligada");
    timer1 = setTimeout(() => {
      yellowLight.classList.remove("amarela-ligada");
      redLight.classList.add("vermelha-ligada");
    }, 2000);
    timer2 = setTimeout(() => {
      redLight.classList.remove("vermelha-ligada");
      greenLight.classList.add("verde-ligada");
      btnClose.classList.remove("botao-desabilitado");
    }, 7000);
  }
});

btnOpen.addEventListener("click", (e) => {
  if (modo == "Normal") {
    clearTimeout(timer1);
    clearTimeout(timer2);
    redLight.classList.remove("vermelha-ligada");
    yellowLight.classList.remove("amarela-ligada");
    greenLight.classList.add("verde-ligada");
  }
});
