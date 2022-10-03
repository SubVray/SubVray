let num = 1;
let valid = false;
let comprobacion = "X";
let agregar = () => {
  let txtNombre = document.querySelector("#txt-nombre").value;
  let txtNota = document.querySelector("#txt-nota").value;
  let txtMateria = document.querySelector("#txt-materia").value;
  let inputs = document.querySelectorAll("form input");

  inputs.forEach((input) => {
    if (txtNombre == "" || txtNota == "" || txtMateria == "") {
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
    if (txtNota >= 70) {
      Swal.fire({
        icon: "success",
        title: "Felicidades",
        text: "Aprobó el curso",
      });
      let datosTabla = `<td> ${num} </td> <td> ${txtNombre} </td> <td>${txtMateria}</td> <td>${txtNota}</td> <td>${comprobacion}</td> <td></td> <td></td> `;
      createTable(datosTabla);
    } else if (txtNota >= 60 && txtNota <= 69) {
      Swal.fire({
        icon: "warning",
        title: "Suerte",
        text: "Perdió el curso",
      });
      let datosTabla = `<td> ${num} </td> <td> ${txtNombre} </td> <td>${txtMateria}</td> <td>${txtNota}</td> <td></td> <td></td> <td>${comprobacion}</td> `;
      createTable(datosTabla);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Lo siento",
        text: "Tiene derecho a realizar el examen extraordinario",
      });
      let datosTabla = `<td> ${num} </td> <td> ${txtNombre} </td> <td>${txtMateria}</td> <td>${txtNota}</td> <td></td> <td>${comprobacion}</td> <td></td> `;
      createTable(datosTabla);
    }
  }
};

let createTable = (datosTabla) => {
  //crea la fila de la tabla
  let agregar = document.createElement("tr");
  //apunta los datos de la tabla
  agregar.innerHTML = datosTabla;
  //agregar los datos a la tabla usando appendChild
  document.getElementById("tabla").appendChild(agregar);
  num++;
  //limpiar los campos del input una vez calcule el valor de colones
  document.querySelector("#txt-nombre").value = "";
  document.querySelector("#txt-materia").value = "";
  document.querySelector("#txt-nota").value = "";
};

let limpiar = () => {
  num = 1;
  //   Limpia los campos de texto a darle click a borrar
  document.querySelector("#txt-nombre").value = "";
  document.querySelector("#txt-materia").value = "";
  document.querySelector("#txt-nota").value = "";

  //Limpia todo el contenido de la tabla
  document.getElementById("tabla").innerHTML = "";
};
