const botonValidarForm = document.getElementById("botonValidarForm");
const contenedorErroresForm = document.getElementById("contenedorErroresForm");

botonValidarForm.addEventListener("click", function(event) {
    event.preventDefault();//Sirve para que no se confunda con el boton del form
    //y no se actualize la pagina
    if (contenedorErroresForm.style.display === "none") {
      contenedorErroresForm.style.display = "block";
    } else {
      contenedorErroresForm.style.display = "none";
    }
  });