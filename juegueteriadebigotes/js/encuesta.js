function evaluacion() {
  error_radio = validar_radio();

  if (error_radio == true) {
    Swal.fire({
      title: "Atención",
      width: 450,
      height: 200,
      iconColor: "#FFF",
      position: "center",
      confirmButtonColor: "#ffbe00",
      color: "#000",
      html: "<iframe src='https://embed.lottiefiles.com/animation/38147'></iframe><br><p class='fw-bold'>Tiene campos vacíos.</p>  <p class='fw-bold'>Conteste todas las preguntas.</p>",
    });
  } else {
    preg1 = document.querySelector(
      "#pregunta1 input[type=radio]:checked"
    ).value;
    preg2 = document.querySelector(
      "#pregunta2 input[type=radio]:checked"
    ).value;
    preg3 = document.querySelector(
      "#pregunta3 input[type=radio]:checked"
    ).value;
    preg4 = document.querySelector(
      "#pregunta4 input[type=radio]:checked"
    ).value;
    preg5 = document.querySelector(
      "#pregunta5 input[type=radio]:checked"
    ).value;

    numero1 = parseInt(preg1);
    numero2 = parseInt(preg2);
    numero3 = parseInt(preg3);
    numero4 = parseInt(preg4);
    numero5 = parseInt(preg5);

    ptnSubTotal = numero1 + numero2 + numero3 + numero4 + numero5;
    console.log(ptnSubTotal);

    ptnTotal = ptnSubTotal / 25;
    console.log(ptnTotal);

    porcFinal = ptnTotal * 100;
    console.log(porcFinal);

    Swal.fire({
      html: `<iframe src="https://embed.lottiefiles.com/animation/98621"></iframe> <br> <p class='fw-bold'>Evaluación: ${porcFinal}</p>`,
      color: "#000",
      confirmButtonColor: "#ffbe00",
      confirmButtonText: "Cerrar",
    }).then(() => {
      document.getElementById("encuesta").reset();
      document.getElementById("cerrar-encuesta").click();
    });
  }
}

let validar_radio = () => {
  let error = false;
  let error_radio = false;
  let inpRadio1 = document.querySelector(
    "#pregunta1 input[type=radio]:checked"
  );
  let inpRadio2 = document.querySelector(
    "#pregunta2 input[type=radio]:checked"
  );
  let inpRadio3 = document.querySelector(
    "#pregunta3 input[type=radio]:checked"
  );
  let inpRadio4 = document.querySelector(
    "#pregunta4 input[type=radio]:checked"
  );
  let inpRadio5 = document.querySelector(
    "#pregunta5 input[type=radio]:checked"
  );
  if (!inpRadio1 || !inpRadio2 || !inpRadio3 || !inpRadio4 || !inpRadio5) {
    error = true;
    error_radio = true;
  } else {
    error_radio = false;
  }
  return error_radio;
};

function btnlimpiar() {
  document.getElementById("a").checked = false;
  document.getElementById("b").checked = false;
  document.getElementById("c").checked = false;
  document.getElementById("d").checked = false;
  document.getElementById("e").checked = false;

  document.getElementById("f").checked = false;
  document.getElementById("g").checked = false;
  document.getElementById("h").checked = false;
  document.getElementById("i").checked = false;
  document.getElementById("j").checked = false;

  document.getElementById("k").checked = false;
  document.getElementById("l").checked = false;
  document.getElementById("m").checked = false;
  document.getElementById("n").checked = false;
  document.getElementById("o").checked = false;

  document.getElementById("p").checked = false;
  document.getElementById("q").checked = false;
  document.getElementById("r").checked = false;
  document.getElementById("s").checked = false;
  document.getElementById("t").checked = false;

  document.getElementById("u").checked = false;
  document.getElementById("w").checked = false;
  document.getElementById("x").checked = false;
  document.getElementById("y").checked = false;
  document.getElementById("z").checked = false;
}
