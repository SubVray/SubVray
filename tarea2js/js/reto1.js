let btnCalcular = document.querySelector("#btn-calcular");
let num = 1;
let resultado = 0;
let valid = false;
// Funcion de hacer la operacion de dolares a colones
let calcular = () => {
  let txtDolares = document.querySelector("#txt-dolares").value;
  let tipoCambio = document.querySelector("#txt-cambio").value;
  let inputs = document.querySelectorAll("form input");

  // forEach para validar cada input vacio del formulario 
  inputs.forEach((input) => {
    if (txtDolares == "" || tipoCambio == "") {
      valid = false;
      input.classList.add("input-invalid");
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Por favor complete los campos resaltados en rojo",
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
    resultado = txtDolares * tipoCambio;
    //variable que almacena la estructura de la tabla
    //td define la celda de la tabla que contiene los datos
    let datosTabla = `<td> ${num} </td> <td> $${txtDolares} </td> <td>₡${tipoCambio} </td> <td>₡${new Intl.NumberFormat(
      "de-DE"
    ).format(resultado)} </td> `;
    //crea la fila de la tabla
    let agregar = document.createElement("tr");
    //apunta los datos de la tabla
    agregar.innerHTML = datosTabla;
    //agregar los datos a la tabla usando appendChild
    document.getElementById("tabla").appendChild(agregar);
    num++;

    //limpiar los campos del input una vez calcule el valor de colones
    document.querySelector("#txt-dolares").value = "";
    document.querySelector("#txt-cambio").value = "";
  }
};

let limpiar = () => {
  num = 1;
  resultado = 0;
  //   Limpia los campos de texto a darle click a borrar
  document.querySelector("#txt-dolares").value = "";
  document.querySelector("#txt-cambio").value = "";

  //Limpia todo el contenido de la tabla
  document.getElementById("tabla").innerHTML = "";
};
