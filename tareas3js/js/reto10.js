const evaluacion = () => {
  //variable que almacena el ID del campo input del nombre de la charla
  //carga la funcion flecha llamada validar_radio()
  error_radio = validar_radio();

  //validacion de campos vacios
  if (error_radio == true) {
    Swal.fire({
      title: "Atención",
      icon: "warning",
      confirmButtonColor: "#8fd0fc",
      color: "#000",
      html: "Tiene campos vacíos. <br> Contestar todas las preguntas.",
    });
  } else {
    //asignacion o apuntar a todos los radios que han sido seleccionados en cada variable

    preg1 = document.querySelector(
      "#fieldset1 input[type=radio]:checked"
    ).value;
    preg2 = document.querySelector(
      "#fieldset2 input[type=radio]:checked"
    ).value;
    preg3 = document.querySelector(
      "#fieldset3 input[type=radio]:checked"
    ).value;
    preg4 = document.querySelector(
      "#fieldset4 input[type=radio]:checked"
    ).value;
    preg5 = document.querySelector(
      "#fieldset5 input[type=radio]:checked"
    ).value;

    //convertir a enteros las variables

    numres1 = parseInt(preg1);
    numres2 = parseInt(preg2);
    numres3 = parseInt(preg3);
    numres4 = parseInt(preg4);
    numres5 = parseInt(preg5);

    ptnSubTotal = numres1 + numres2 + numres3 + numres4 + numres5;
    ptnTotal = ptnSubTotal / 25;
    porcFinal = ptnTotal * 100;
    (total.innerHTML = `Evaluación del servicio: ${porcFinal}`),
      Swal.fire({
        title: `La evaluación fue enviada correctamente `,
        text: `Evaluación del servicio: ${porcFinal}`,
        icon: "success",
        color: "#000",
        confirmButtonColor: "#8fd0fc",
      });
    limpiar();
  }
};

// validacion
let validar_radio = () => {
  let error = false;
  let error_radio = false;
  let radio1 = document.querySelector("#fieldset1 input[type=radio]:checked");
  let radio2 = document.querySelector("#fieldset2 input[type=radio]:checked");
  let radio3 = document.querySelector("#fieldset3 input[type=radio]:checked");
  let radio4 = document.querySelector("#fieldset4 input[type=radio]:checked");
  let radio5 = document.querySelector("#fieldset5 input[type=radio]:checked");
  if (!radio1 || !radio2 || !radio3 || !radio4 || !radio5) {
    error = true;
    error_radio = true;
  } else {
    error_radio = false;
  }
  return error_radio;
};

function limpiar() {
  document.querySelectorAll("#fieldset1 input").forEach((radio) => {
    radio.checked = false;
  });
  document.querySelectorAll("#fieldset2 input").forEach((radio) => {
    radio.checked = false;
  });
  document.querySelectorAll("#fieldset3 input").forEach((radio) => {
    radio.checked = false;
  });
  document.querySelectorAll("#fieldset4 input").forEach((radio) => {
    radio.checked = false;
  });
  document.querySelectorAll("#fieldset5 input").forEach((radio) => {
    radio.checked = false;
  });
}
