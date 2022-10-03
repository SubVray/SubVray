let num = 1;
let valid = false;
let agregar = () => {
  let departamento = "";
  let txtNombre = document.querySelector("#txt-nombre").value;
  let txtCodigo = document.querySelector("#txt-codigo").value;
  let inputs = document.querySelectorAll("form input");

  inputs.forEach((input) => {
    if (txtNombre == "" || txtCodigo == "") {
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
    if (txtCodigo == 0) {
      document.querySelector("#txt-codigo").classList.add("input-invalid");
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Por favor complete los campos resaltados en rojo, el código debe ser mayor a 0",
      });
    } else if (txtCodigo <= 100) {
      departamento = "Departamento de Informática";
      createTable(txtNombre, txtCodigo, departamento);
      departamento = "";
      document.querySelector("#txt-codigo").classList.remove("input-invalid");
    } else if (txtCodigo <= 200) {
      departamento = "Departamento Web";
      document.querySelector("#txt-codigo").classList.remove("input-invalid");
      createTable(txtNombre, txtCodigo, departamento);
      departamento = "";
    } else if (txtCodigo <= 300) {
      departamento = "Departamento UX-UI";
      document.querySelector("#txt-codigo").classList.remove("input-invalid");
      createTable(txtNombre, txtCodigo, departamento);
      departamento = "";
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "NO existe la clasificación",
      });
    }
  }
};

let createTable = (txtNombre, txtCodigo, departamento) => {
  let datosTabla = `<td>${num}</td> <td>${txtNombre}</td> <td>${txtCodigo}</td> <td>${departamento}</td>`;
  //crea la fila de la tabla
  let agregar = document.createElement("tr");
  //apunta los datos de la tabla
  agregar.innerHTML = datosTabla;
  //agregar los datos a la tabla usando appendChild
  document.getElementById("tabla").appendChild(agregar);
  num++;
  //limpiar los campos del input una vez calcule el valor de colones
  document.querySelector("#txt-nombre").value = "";
  document.querySelector("#txt-codigo").value = "";
};

let limpiar = () => {
  num = 1;
  //   Limpia los campos de texto a darle click a borrar
  document.querySelector("#txt-nombre").value = "";
  document.querySelector("#txt-codigo").value = "";

  //Limpia todo el contenido de la tabla
  document.getElementById("tabla").innerHTML = "";
};
