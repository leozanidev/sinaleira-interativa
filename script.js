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

function controlaModo() {
  if (modo == "Noturno") {
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

  if (modo == "Emergencia") {
    greenLight.classList.remove("verde-ligada");
    yellowLight.classList.remove("amarela-ligada");
    redLight.classList.add("vermelha-ligada");
  }
}

modo = "Normal";

btnNormal.addEventListener("click", (e) => {
  clearInterval(interval1);
  clearTimeout(timer1);
  clearTimeout(timer2);
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
  clearInterval(interval1);
  clearTimeout(timer1);
  clearTimeout(timer2);
  btnNormal.classList.remove("btn-modo-ativo");
  btnEmergencia.classList.remove("btn-modo-ativo");
  btnNoturno.classList.add("btn-modo-ativo");
  btnClose.classList.add("botao-desabilitado");
  btnOpen.classList.add("botao-desabilitado");
  modo = "Noturno";
  controlaModo();
});

btnEmergencia.addEventListener("click", (e) => {
  clearInterval(interval1);
  clearTimeout(timer1);
  clearTimeout(timer2);
  btnNoturno.classList.remove("btn-modo-ativo");
  btnNormal.classList.remove("btn-modo-ativo");
  btnEmergencia.classList.add("btn-modo-ativo");
  btnClose.classList.add("botao-desabilitado");
  btnOpen.classList.add("botao-desabilitado");
  modo = "Emergencia";
  controlaModo();
});

btnClose.addEventListener("click", (e) => {
  if (modo == "Normal") {
    clearTimeout(timer1);
    clearTimeout(timer2);
    greenLight.classList.remove("verde-ligada");
    yellowLight.classList.add("amarela-ligada");
    timer1 = setTimeout(() => {
      yellowLight.classList.remove("amarela-ligada");
      redLight.classList.add("vermelha-ligada");
    }, 2000);
    timer2 = setTimeout(() => {
      redLight.classList.remove("vermelha-ligada");
      greenLight.classList.add("verde-ligada");
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
