let num = 1;
let valid = false;
let agregar = () => {
  let txtNombre = document.querySelector("#txt-nombre").value;
  let txtCedula = document.querySelector("#txt-cedula").value;
  let txtCorreo = document.querySelector("#txt-correo").value;
  let txtDepartamento = document.querySelector("#txt-departamento").value;
  let img = document.getElementById("img");
  let provincia = document.getElementById("provincia");
  let inputs = document.querySelectorAll("form input");

  inputs.forEach((input) => {
    if (
      txtNombre == "" ||
      txtCedula == "" ||
      txtCorreo == "" ||
      txtDepartamento == ""
    ) {
      valid = false;
      input.classList.add("input-invalid");
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Por favor complete los campos resaltados en rojo",
        confirmButtonColor: "#568d79",
        confirmButtonText: "Entendido",
      });
      if (input.value != "") {
        input.classList.remove("input-invalid");
      }
    } else {
      input.classList.remove("input-invalid");
      input.classList.add("input-valid");
      valid = true;
    }
  });

  if (valid == true) {
    provincia.classList.remove("d-none");
    if (txtCedula[0] == 1) {
      img.innerHTML =
        '<img src="images/provincias/sanjose.png" class="img-fluid"></img>';
    } else if (txtCedula[0] == 2) {
      img.innerHTML =
        '<img src="images/provincias/alajuela.png" class="img-fluid"></img>';
    } else if (txtCedula[0] == 3) {
      img.innerHTML =
        '<img src="images/provincias/cartago.png" class="img-fluid"></img>';
    } else if (txtCedula[0] == 4) {
      img.innerHTML =
        '<img src="images/provincias/heredia.png" class="img-fluid"></img>';
    } else if (txtCedula[0] == 5) {
      img.innerHTML =
        '<img src="images/provincias/guanacaste.png" class="img-fluid"></img>';
    } else if (txtCedula[0] == 6) {
      img.innerHTML =
        '<img src="images/provincias/puntarenas.png" class="img-fluid"></img>';
    } else if (txtCedula[0] == 7) {
      img.innerHTML =
        '<img src="images/provincias/limon.png" class="img-fluid"></img>';
    } else if (txtCedula[0] == 8) {
      img.innerHTML =
        '<img src="images/provincias/extranjero.png" class="img-fluid"></img>';
    } else {
      provincia.classList.add("d-none");
      document.querySelector("#txt-cedula").classList.add("input-invalid");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Compruebe el numero inicial de su cédula.",
        confirmButtonColor: "#568d79",
        confirmButtonText: "Entendido",
      });
    }
  }
};

let limpiar = () => {
  num = 1;
  //   Limpia los campos de texto a darle click a borrar
  document.querySelector("#txt-nombre").value = "";
  document.querySelector("#txt-cedula").value = "";
  document.querySelector("#txt-correo").value = "";
  document.querySelector("#txt-departamento").value = "";
  //Limpia todo el contenido de la tabla
  document.getElementById("provincia").innerHTML = "";
};
