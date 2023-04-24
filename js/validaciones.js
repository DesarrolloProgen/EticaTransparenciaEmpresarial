const archivos = [];
let tipo_reporte,
  nombre = "",
  tipo_identificacion = "",
  otro_tipo_identificacion = "",
  numero_identificacion = 0,
  tipo_denuncia,
  otro_tipo_denuncia = "",
  descripcion_situacion,
  areas_involucradas,
  personas_implicadas,
  evidencia,
  contacto,
  tipo_contacto = "",
  otro_tipo_contacto = "",
  medio_contacto = "";

function validaciones() {
  if (tipo_reporte == null) {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Debe seleccionar si desea o no reportar anonimamente";
    return false;
  }
  if (tipo_reporte == "No") {
    if (nombre == "") {
      document.getElementById("headermensaje").style.background = "#ff3c37";
      document.getElementById("titulomensaje").innerHTML = "ERROR";
      document.getElementById("mensaje").innerHTML = "Debe ingresar su nombre";
      return false;
    }
    if (tipo_identificacion == "") {
      document.getElementById("headermensaje").style.background = "#ff3c37";
      document.getElementById("titulomensaje").innerHTML = "ERROR";
      document.getElementById("mensaje").innerHTML =
        "Debe seleccionar el tipo de identificacion";
      return false;
    }
    if (tipo_identificacion == "Otro:" && otro_tipo_identificacion == "") {
      document.getElementById("headermensaje").style.background = "#ff3c37";
      document.getElementById("titulomensaje").innerHTML = "ERROR";
      document.getElementById("mensaje").innerHTML =
        "Debe ingresar el otro tipo de identificacion";
      return false;
    }
    if (numero_identificacion == 0) {
      document.getElementById("headermensaje").style.background = "#ff3c37";
      document.getElementById("titulomensaje").innerHTML = "ERROR";
      document.getElementById("mensaje").innerHTML =
        "Debe ingresar su numero de identificación";
      return false;
    }
  }
  if (tipo_denuncia == null) {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Debe seleccionar un tipo de denuncia";
    return false;
  }
  if (tipo_denuncia == "Otras:" && otro_tipo_denuncia == null) {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Debe ingresar el tipo de denuncia";
    return false;
  }
  if (descripcion_situacion == null) {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Debe ingresar la descipción de la situación";
    return false;
  }
  if (areas_involucradas == null) {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Debe ingresar la(s) area(s) involucradas";
    return false;
  }
  if (personas_implicadas == null) {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Debe ingresar las personas involucradas";
    return false;
  }
  if (evidencia == null) {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Seleccione si va a cargar evidencias";
    return false;
  }
  if (evidencia == "Si" && archivos.length === 0) {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Seleccione los archivos que va a cargar";
    return false;
  }
  if (contacto == null) {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Seleccione si desea ser contactado en caso de ser necesario";
    return false;
  }
  if (contacto == "Si" && tipo_contacto == null) {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Seleccione el tipo de contacto que desea";
    return false;
  }
  if (tipo_contacto == "Otro:" && otro_tipo_contacto == "") {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Ingrese el otro tipo de contacto";
    return false;
  }
  if (contacto == "Si" && medio_contacto == "") {
    document.getElementById("headermensaje").style.background = "#ff3c37";
    document.getElementById("titulomensaje").innerHTML = "ERROR";
    document.getElementById("mensaje").innerHTML =
      "Ingrese el número de contacto";
    return false;
  }
  submitForm()
}
