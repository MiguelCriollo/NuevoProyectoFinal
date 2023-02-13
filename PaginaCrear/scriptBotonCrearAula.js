const botonCerrarMenuPreguntas = document.getElementById("botonCerrarMenuPreguntas");
botonCerrarMenuPreguntas.addEventListener("click", function(event) {
    event.preventDefault();
    seleccionPreguntas.style.display = "none";
    alert("Su codigo de aula es 11223344");
  });