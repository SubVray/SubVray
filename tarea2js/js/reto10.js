let num = 1;
let valid = false;
let agregar = () => {
  let txtNombre = document.querySelector("#txt-nombre").value;
  let txtServicio = document.querySelector("#txt-servicio").value;
  let txtHora = document.querySelector("#txt-hora").value;
  let txtDia = document.querySelector("#txt-dia").value;
  let txtMonto = document.querySelector("#txt-monto").value;
  let inputs = document.querySelectorAll("form input");

  inputs.forEach((input) => {
    if (
      txtNombre == "" ||
      txtServicio == "" ||
      txtHora == "" ||
      txtDia == "" ||
      txtMonto == ""
    ) {
      valid = false;
      input.classList.add("input-invalid");
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Por favor complete los campos resaltados en rojo",
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
    createTable(txtNombre, txtServicio, txtHora, txtDia, txtMonto);
  }
};

let createTable = (txtNombre, txtServicio, txtHora, txtDia, txtMonto) => {
  let datosTabla = `<td>${num}</td> <td>${txtNombre}</td> <td>${txtServicio}</td> <td>${txtHora}</td> <td>${txtDia}</td>  <td>${new Intl.NumberFormat(
    "de-DE"
  ).format(txtMonto)}</td>`;
  //crea la fila de la tabla
  let agregar = document.createElement("tr");
  //apunta los datos de la tabla
  agregar.innerHTML = datosTabla;
  //agregar los datos a la tabla usando appendChild
  document.getElementById("tabla").appendChild(agregar);
  num++;
  //limpiar los campos del input una vez calcule el valor de colones
  document.querySelector("#txt-nombre").value = "";
  document.querySelector("#txt-servicio").value = "";
  document.querySelector("#txt-hora").value = "";
  document.querySelector("#txt-dia").value = "";
  document.querySelector("#txt-monto").value = "";
};

let limpiar = () => {
  num = 1;
  //   Limpia los campos de texto a darle click a borrar
  document.querySelector("#txt-nombre").value = "";
  document.querySelector("#txt-servicio").value = "";
  document.querySelector("#txt-hora").value = "";
  document.querySelector("#txt-dia").value = "";
  document.querySelector("#txt-monto").value = "";
  //Limpia todo el contenido de la tabla
  document.getElementById("tabla").innerHTML = "";
};
