const url =
  "https://prod-12.brazilsouth.logic.azure.com:443/workflows/4f4010d04b5340bf9a8f006406692cfe/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UB9coBbkSDC5T-jMq3RgQY8EYy56Mb9tUs_KyvmvtT8";
var data = {};

function submitForm() {
  data = {
    tipo_reporte: tipo_reporte === "Si" ? true : false,
    nombre: nombre,
    tipo_identificacion: tipo_identificacion,
    otro_tipo_identificacion: otro_tipo_identificacion,
    numero_identificacion: numero_identificacion,
    tipo_denuncia: tipo_denuncia,
    otro_tipo_denuncia: otro_tipo_denuncia,
    descripcion_situacion: descripcion_situacion,
    areas_involucradas: areas_involucradas,
    personas_implicadas: personas_implicadas,
    archivos: archivos,
    contacto: contacto === "Si" ? true : false,
    tipo_contacto: tipo_contacto,
    otro_tipo_contacto: otro_tipo_contacto,
    medio_contacto: medio_contacto,
  };

  const settings = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(data);
  cargando();
  enviarPeticion(settings);
}

function cargando() {
  document.getElementById("headermensaje").style.background = "#4040ff";
  document.getElementById("titulomensaje").innerHTML = "Cargando";
  document.getElementById("mensaje").innerHTML =
    '<img src="https://acegif.com/wp-content/uploads/loading-25.gif" alt="Cargando" width="50px" height="50px"><span style="padding-left: 10px">Cargando...</span>';
}

function enviarPeticion(settings) {
  fetch(url, settings).then((response) => {
    console.log(response);
    document.getElementById("headermensaje").style.background = "#6EF05F";
    document.getElementById("titulomensaje").innerHTML = "Realizado";
    document.getElementById("mensaje").innerHTML =
      "Se realizó correctamente su registro.";
    document.getElementById("formulario").reset();
  });
}
