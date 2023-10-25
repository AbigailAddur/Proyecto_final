
  function validarFormulario(event) {
    event.preventDefault(); 

   
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;


    if (nombre === "" || email === "" || mensaje === "") {
        alert("Todos los campos son obligatorios.");
    } else {
       
        mensajeExito.textContent = "Mensaje enviado correctamente. ¡Gracias por ponerse en contacto con nosotros!";
        
    }
}


form.addEventListener("submit", validarFormulario);
