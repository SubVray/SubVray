let num = 1;
let valid = false;
let aumento = 0;
let total = 0;
let agregar = () => {
  let txtNombre = document.querySelector("#txt-nombre").value;
  let txtSalario = document.querySelector("#txt-salario").value;
  let inputs = document.querySelectorAll("form input");
  inputs.forEach((input) => {
    if (txtNombre == "" || txtSalario == "") {
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
    if (txtSalario > 300000) {
      aumento = txtSalario * 0.1;
      total = parseInt(txtSalario) + parseInt(aumento);
      let datosTabla = `<td> ${num} </td> <td> ${txtNombre} </td> <td>₡${new Intl.NumberFormat(
        "de-DE"
      ).format(txtSalario)}</td> <td>10%</td> <td>₡${new Intl.NumberFormat(
        "de-DE"
      ).format(aumento)}</td> <td>₡${new Intl.NumberFormat("de-DE").format(
        total
      )}</td>   `;
      createTable(datosTabla);
    } else {
      aumento = txtSalario * 0.2;
      total = parseInt(txtSalario) + parseInt(aumento);
      let datosTabla = `<td> ${num} </td> <td> ${txtNombre} </td> <td>₡${new Intl.NumberFormat(
        "de-DE"
      ).format(txtSalario)}</td> <td>20%</td> <td>₡${new Intl.NumberFormat(
        "de-DE"
      ).format(aumento)}</td> <td>₡${new Intl.NumberFormat("de-DE").format(
        total
      )}</td>   `;
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
  document.querySelector("#txt-salario").value = "";
  aumento = 0;
  total = 0;
};

let limpiar = () => {
  num = 1;
  //   Limpia los campos de texto a darle click a borrar
  document.querySelector("#txt-nombre").value = "";
  document.querySelector("#txt-salario").value = "";

  //Limpia todo el contenido de la tabla
  document.getElementById("tabla").innerHTML = "";
};
