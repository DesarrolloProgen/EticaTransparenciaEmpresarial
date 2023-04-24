function tipoReporte(selected) {
  selected.value === "Si"
    ? (document.getElementById("persona").style.display = "none") 
    : (document.getElementById("persona").style.display = "");
    tipo_reporte = selected.value;
}

function onChangeNombre(event) {
  nombre = event.target.value;
}

function tipoindentificacionOnchange(selected) {
  selected.value === "Otro:"
    ? (document.getElementById("input_tipo_identificacion").style.display = "")
    : (document.getElementById("input_tipo_identificacion").style.display =
        "none");
    tipo_identificacion = selected.value;
}

function onChangeOtroTipoIdentificacion(event) {
  otro_tipo_identificacion = event.target.value;
}

function onChangeNumeroIdentificacion(event) {
  numero_identificacion = event.target.value;
  console.log(numero_identificacion)
}

function tipoDenunciaOnchange(selected) {
  selected.value === "Otras:"
    ? (document.getElementById("input_tipo_denuncia").style.display = "")
    : (document.getElementById("input_tipo_denuncia").style.display = "none");
    tipo_denuncia = selected.value;
}

function onChangeOtroTipoDenuncia(event) {
  otro_tipo_denuncia = event.target.value;
}

function onchangeDescripcion(event) {
  descripcion_situacion = event.target.value;
}

function onchangeAreasInvolucradas(event) {
  areas_involucradas = event.target.value;
}

function onchangePersonasImplicadas(event) {
  personas_implicadas = event.target.value;
}

function evidenciaOnchage(selected) {
  selected.value === "Si"
    ? (document.getElementById("subir_archivos").style.display = "")
    : (document.getElementById("subir_archivos").style.display = "none");
  evidencia = selected.value
}

function contactoOnchange(selected) {
  selected.value === "Si"
    ? (document.getElementById("contacto").style.display = "")
    : (document.getElementById("contacto").style.display = "none");
  contacto = selected.value
}

function OnchangeTipoContacto(selected){
  selected.value === "Otro:"
  ? (document.getElementById("input_tipo_contacto").style.display = "")
  : (document.getElementById("input_tipo_contacto").style.display = "none");
  tipo_contacto = event.target.value
}
function onChangeOtroTipoContacto(event){
  otro_tipo_contacto = event.target.value
}

function onChangeContacto(event){
  medio_contacto = event.target.value
}
jQuery(document).ready(function () {
  // Listen for the input event.
  jQuery("#num_identificacion").on("input", function (evt) {
    // Allow only numbers.
    jQuery(this).val(
      jQuery(this)
        .val()
        .replace(/[^0-9]/g, "")
    );
  });

  jQuery("#numero_contacto").on("input", function (evt) {
    // Allow only numbers.
    jQuery(this).val(
      jQuery(this)
        .val()
        .replace(/[^0-9]/g, "")
    );
  });
});

function onChangeFile(f) {
  const files = f.files;
  let label= "";
  for (let i = 0; i < files.length; i++) {
    let fr = new FileReader();
    fr.addEventListener(
      "load",
      function () {
        let contenido = fr.result.split(",");
        const obj = {
          filename: files[i].name,
          mimeType: files[i].type,
          contenido: {
            "$content-type": files[i].type,
            $content: contenido[1],
          },
        };
        archivos.push(obj);
      },
      false
    );
    fr.readAsDataURL(files[i]);
    i === files.length - 1
    ? label += files[i].name   
    : label += files[i].name + " - "; 
  }
  document.getElementsByClassName("custom-file-label")[0].innerHTML = label
}

$(".custom-file-input").on("change", function () {
  console.log("entro")
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

