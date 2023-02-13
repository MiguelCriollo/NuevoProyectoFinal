const botonValidarCodigoClase = document.getElementById("botonValidarCodigoClase");
const preguntasClase = document.getElementById("preguntasClase");

botonValidarCodigoClase.addEventListener("click", function(event) {
    event.preventDefault();
    preguntasClase.style.display = "block";
  });