const inputsRegister = document.querySelectorAll("#form-register input");
const btnRegister = document.getElementById("btn-register-form");

let validarFormRegister = () => {
  error = false;
  inputsRegister.forEach((input) => {
    if (input.value == "") {
      error = true;
      input.classList.add("input-invalid");
      input.classList.remove("input-valid");
    } else {
      input.classList.add("input-valid");
      input.classList.remove("input-invalid");
    }
  });
  if (error == true) {
    Swal.fire({
      icon: "warning",
      title: "Datos ingresados incorrectamente",
      confirmButtonColor: "#18b158",
      text: "Por favor revise los campos resaltados en rojo",
      confirmButtonText: "Entendido",
    });
  } else {
    obtenerDatos();
  }
};
const obtenerDatos = () => {
  swal
    .fire({
      icon: "success",
      title: "Campos completos",
      confirmButtonColor: "#18b158",
      text: "Te has registrado exitosamente",
      confirmButtonText: "Entendido",
    })
    .then(() => {
      window.location.href = "listadoRegister.html";
    });
};

btnRegister.addEventListener("click", validarFormRegister);
