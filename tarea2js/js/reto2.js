let btnCalcular = document.querySelector("#btn-calcular");
let num = 1;
let resultado = 0;
let valid = false;
let calcular = () => {
  let txtColones = document.querySelector("#txt-colones").value;
  let tipoCambio = document.querySelector("#txt-cambio").value;
  let inputs = document.querySelectorAll("form input");
  inputs.forEach((input) => {
    if (txtColones == "" || tipoCambio == "") {
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
    resultado = txtColones * tipoCambio;
    //variable que almacena la estructura de la tabla
    //td define la celda de la tabla que contiene los datos
    let datosTabla = `<td> ${num} </td> <td> ₡${txtColones} </td> <td>$${
      tipoCambio
    } </td> <td>₡${new Intl.NumberFormat("de-DE").format(resultado)} </td> `;

    //crea la fila de la tabla
    let agregar = document.createElement("tr");
    //apunta los datos de la tabla
    agregar.innerHTML = datosTabla;
    //agregar los datos a la tabla usando appendChild
    document.getElementById("tabla").appendChild(agregar);
    num++;

    //limpiar los campos del input una vez calcule el valor de colones
    document.querySelector("#txt-colones").value = "";
    document.querySelector("#txt-cambio").value = "";
  }
};

let limpiar = () => {
  num = 1;
  resultado = 0;
  //   Limpia los campos de texto a darle click a borrar
  document.querySelector("#txt-colones").value = "";
  document.querySelector("#txt-cambio").value = "";

  //Limpia todo el contenido de la tabla
  document.getElementById("tabla").innerHTML = "";
};
