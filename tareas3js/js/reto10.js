function mostrar() {
  let puntaje = 0;
  let radios1 = document.querySelectorAll("#fieldset1 input");
  let radios2 = document.querySelectorAll("#fieldset2 input");
  let radios3 = document.querySelectorAll("#fieldset3 input");
  let radios4 = document.querySelectorAll("#fieldset4 input");
  let radios5 = document.querySelectorAll("#fieldset5 input");

  radios1.forEach((radio) => {
    if (radio.value == 5 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 4 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 3 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 2 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 1 && radio.checked) {
      puntaje += parseInt(radio.value);
    }
  });
  radios2.forEach((radio) => {
    if (radio.value == 5 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 4 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 3 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 2 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 1 && radio.checked) {
      puntaje += parseInt(radio.value);
    }
  });
  radios3.forEach((radio) => {
    if (radio.value == 5 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 4 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 3 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 2 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 1 && radio.checked) {
      puntaje += parseInt(radio.value);
    }
  });
  radios4.forEach((radio) => {
    if (radio.value == 5 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 4 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 3 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 2 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 1 && radio.checked) {
      puntaje += parseInt(radio.value);
    }
  });
  radios5.forEach((radio) => {
    if (radio.value == 5 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 4 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 3 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 2 && radio.checked) {
      puntaje += parseInt(radio.value);
    } else if (radio.value == 1 && radio.checked) {
      puntaje += parseInt(radio.value);
    }
  });
  total.innerHTML = `Puntaje total: ${puntaje}`;
  swal.fire({
    icon: "success",
    title: "El resultado a sido enviado con exito",
  });
  radios1.forEach((radio) => {
    radio.checked = false;
  });
  radios2.forEach((radio) => {
    radio.checked = false;
  });
  radios3.forEach((radio) => {
    radio.checked = false;
  });
  radios4.forEach((radio) => {
    radio.checked = false;
  });
  radios5.forEach((radio) => {
    radio.checked = false;
  });
}
