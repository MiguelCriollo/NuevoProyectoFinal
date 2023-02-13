const botonFinalizarPreguntas = document.getElementById("botonFinalizarPreguntas");

botonFinalizarPreguntas.addEventListener("click", function(event) {
    event.preventDefault();
    preguntasClase.style.display = "none";
    alert("Su puntacion es: 30/4502");
  });