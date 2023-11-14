function validar(){
    let nombre=document.getElementById("lname");
    let correo=document.getElementById("email");
    let mensaje=document.getElementById("message")
    let error=false;
    document.getElementById("validar_nombre").innerHTML="";
    document.getElementById("validar_email").innerHTML="";
    document.getElementById("validar_mensaje").innerHTML="";
    if(nombre.value == ""){
        /*document.getElementById("validar_nombre").innerHTML="Debe completar el nombre";*/
        alert("Debe insertar un nombre");
        error=true;
        /*usuario.focus();*/
    }
    if(correo.value == ""){
        /*document.getElementById("validar_email").innerHTML="Debe completar el correo";*/
        alert("Debe insertar una direccion de email");
        error=true;
        /*clave.focus();*/
    }
  
    if(mensaje.value == ""){
      /*document.getElementById("validar_mensaje").innerHTML="Debe completar mensaje";*/
      alert("Debe insertar un mensaje");
      error=true;
      /*usuario.focus();*/
   }
    if(error == false){
        alert("Datos enviados");
        document.getElementById("nombre").value= "";
        /*document.getElementById("validar_nombre").innerHTML="";*/
        document.getElementById("correo").value= "";
        /*document.getElementById("validar_correo").innerHTML="";*/
        document.getElementById("mensaje").value= "";
        /*document.getElementById("validar_mensaje").innerHTML="";*/
        
      
    }
    return !error;
    }
