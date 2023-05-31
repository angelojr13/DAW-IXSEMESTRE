const pelota = document.getElementById("pelota");
let Pos = 0;

let temporizador;

 

const play = document.getElementById("play")

play.addEventListener("click", function () {
  clearInterval(temporizador);
  temporizador = setInterval(() => {
    if (Pos == 400) {
      Pos = 0;
    }
    Pos += 5;
    pelota.style.left = Pos + "px";
  }, 50);
});

const pause = document.getElementById("pause");

pause.addEventListener("click", function () {
  setTimeout(function () {
    clearInterval(temporizador);
  }, 0);
});

const stop = document.getElementById("stop");

stop.addEventListener("click", function () {
  setTimeout(function () {
    clearInterval(temporizador);
  }, 0);
  Pos = 0
  pelota.style.left = Pos + "px";
});

const reverse = document.getElementById("reverse");

reverse.addEventListener("click", function () {
  clearInterval(temporizador)
  temporizador = setInterval(() => {
    if (Pos == 0){
      Pos = 400;
    }
    Pos -= 5;
    pelota.style.left = Pos + "px";
  }, 50);
});


/* const pelota = document.getElementById("pelota");
let posicion = 0;
let temporizador;

document.getElementById("play").addEventListener("click", function () {
  clearInterval(temporizador);
  temporizador = setInterval(() => {
    posicion += 5;
    pelota.style.left = posicion + "px";
    if (posicion == 400) {
      posicion = 0
    }
  }, 50);
});

document.getElementById("pause").addEventListener("click", function () {
  clearInterval(temporizador);
});

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(temporizador);
  posicion = 0;
  pelota.style.left = posicion + "px";
});

document.getElementById("reverse").addEventListener("click", function () {
  clearInterval(temporizador);
  temporizador = setInterval(() => {
    posicion -= 5;
    pelota.style.left = posicion + "px";
    if (posicion <= 0) {
      posicion = 400
    }
  }, 50);
}); */
