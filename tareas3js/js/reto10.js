function mostrar() {
  let puntaje = 0;
  let radios = document.querySelectorAll("input");
  let radios1 = document.querySelectorAll("#fieldset1 input");
  let radiosA1 = document.querySelectorAll("#fieldset1 .answincorrect");
  let radios2 = document.querySelectorAll("#fieldset2 input");
  let radiosA2 = document.querySelectorAll("#fieldset2 .answincorrect");
  let radios3 = document.querySelectorAll("#fieldset3 input");
  let radiosA3 = document.querySelectorAll("#fieldset3 .answincorrect");
  let radios4 = document.querySelectorAll("#fieldset4 input");
  let radiosA4 = document.querySelectorAll("#fieldset4 .answincorrect");
  console.log(radiosA1);
  radios1.forEach((radio) => {
    if (radio.value == 1 && radio.checked) {
      puntaje += parseInt(radio.value);
      document.getElementById("correct1").classList.remove("d-none");
      document.querySelector(".answcorrect1").classList.add("aswcorrect");
    } else {
      document.querySelector(".answcorrect1").classList.add("aswcorrect");
      document.getElementById("correct1").classList.remove("d-none");
      radiosA1.forEach((radioA) => {
        radioA.classList.add("aswincorrect");
      });
    }
  });
  radios2.forEach((radio) => {
    if (radio.value == 1 && radio.checked) {
      puntaje += parseInt(radio.value);
      document.getElementById("correct2").classList.remove("d-none");
      document.querySelector(".answcorrect2").classList.add("aswcorrect");
    } else {
      document.querySelector(".answcorrect2").classList.add("aswcorrect");
      document.getElementById("correct2").classList.remove("d-none");
      radiosA2.forEach((radioA) => {
        radioA.classList.add("aswincorrect");
      });
    }
  });
  radios3.forEach((radio) => {
    if (radio.value == 1 && radio.checked) {
      puntaje += parseInt(radio.value);
      document.getElementById("correct3").classList.remove("d-none");
      document.querySelector(".answcorrect3").classList.add("aswcorrect");
    } else {
      document.querySelector(".answcorrect3").classList.add("aswcorrect");
      document.getElementById("correct3").classList.remove("d-none");
      radiosA3.forEach((radioA) => {
        radioA.classList.add("aswincorrect");
      });
    }
  });
  radios4.forEach((radio) => {
    if (radio.value == 1 && radio.checked) {
      puntaje += parseInt(radio.value);
      document.getElementById("correct4").classList.remove("d-none");
      document.querySelector(".answcorrect4").classList.add("aswcorrect");
    } else {
      document.querySelector(".answcorrect4").classList.add("aswcorrect");
      document.getElementById("correct4").classList.remove("d-none");
      radiosA4.forEach((radioA) => {
        radioA.classList.add("aswincorrect");
      });
    }
  });
  alert(puntaje);
}
