const botonAbrirMenuPreguntas = document.getElementById("botonAbrirMenuPreguntas");
const seleccionPreguntas = document.getElementById("seleccionPreguntas");

botonAbrirMenuPreguntas.addEventListener("click", function(event) {
    event.preventDefault();
    seleccionPreguntas.style.display = "block";
  });