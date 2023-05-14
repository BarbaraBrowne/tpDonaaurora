function validardatos(){
$("#msjNombre").text("");
$("#msjApellido").text(""); 
$("#msjEdad").text("");
$("#msjMail").text("");

  let nombre =$("#nombre").val();
  let apellido=$("#apellido").val();
  let edad=$("#edad").val();
  let mail=$("#mail").val();
  var ban = 0;
  var banA=0;
  var ban1 = 0;
  
  var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  var valpalabra = /^[a-zA-Z]*$/;
  const form = document.getElementById("contact");


  if (nombre == 0){
    $("#msjNombre").text("completar este campo");
  }
  else {
    if(!valpalabra.test(nombre)){
    $("#msjNombre").text("ingrese solo letras");
      ban=1;
  }
}
   if (apellido == 0){
    $("#msjApellido").text("completar este campo");
  }
   else {
    if(!valpalabra.test(apellido)){
    $("#msjApellido").text("ingrese solo letras");
      banA=1;
  }
}
  if (edad == 0){
    $("#msjEdad").text("completar este campo");
  } else { 
    if (edad <=0 && edad <=16) {
        $("#msjEdad").text("la persona debe tener mas de 15 años");   
                    }
  }
     
  if (mail== 0){
        $("#msjMail").text("completar este campo");
        ban1=1;
      }else{
           if (!regex.test(mail)) {
           $("#msjMail").text("ingrese un mail de manera correcta");
             ban1=1;
           }
             }
          
  if(nombre!=0 && ban==0 && apellido!=0 && banA==0 && edad!=0 && edad>=18 && mail!==0 && ban1 == 0){
    alert("mensaje enviado")
    form.reset();
  }
}