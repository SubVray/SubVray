let num = 1;
let valid = false;
let txtCargoUpper = "";
curso = "";
let agregar = () => {
  let txtNombre = document.querySelector("#txt-nombre").value;
  let txtApellido = document.querySelector("#txt-apellido").value;
  let txtCargo = document.querySelector("#txt-cargo");
  let inputs = document.querySelectorAll("form input");
  
  // forEach para validar cada input vacio del formulario
  inputs.forEach((input) => {
    if (txtNombre == "" || txtApellido == "" || txtCargo == "") {
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
    if (txtCargo.value.toUpperCase() == "1D") {
      txtCargo = txtCargo.value;
      txtCargoUpper = txtCargo.toUpperCase();
      curso = "Curso libre";
      //variable que almacena la estructura de la tabla
      //td define la celda de la tabla que contiene los datos
      let datosTabla = `<td> ${num} </td> <td> ${txtNombre} </td> <td>${txtApellido} </td> <td>${txtCargoUpper} </td> <td>${curso} </td> `;

      //crea la fila de la tabla
      let agregar = document.createElement("tr");
      //apunta los datos de la tabla
      agregar.innerHTML = datosTabla;
      //agregar los datos a la tabla usando appendChild
      document.getElementById("tabla").appendChild(agregar);
      num++;

      //limpiar los campos del input una vez calcule el valor de colones
      document.querySelector("#txt-nombre").value = "";
      document.querySelector("#txt-apellido").value = "";
      document.querySelector("#txt-cargo").value = "";
    } else {
      txtCargo = txtCargo.value;
      txtCargoUpper = txtCargo.toUpperCase();
      Swal.fire({
        icon: "warning",
        title: "No hay premio",
        text: "No cumple con el cargo necesario para obtener el curso libre.",
      });
      curso = "No hay premio";
      //variable que almacena la estructura de la tabla
      //td define la celda de la tabla que contiene los datos
      let datosTabla = `<td> ${num} </td> <td> ${txtNombre} </td> <td>${txtApellido} </td> <td>${txtCargoUpper} </td> <td>${curso} </td> `;

      //crea la fila de la tabla
      let agregar = document.createElement("tr");
      //apunta los datos de la tabla
      agregar.innerHTML = datosTabla;
      //agregar los datos a la tabla usando appendChild
      document.getElementById("tabla").appendChild(agregar);
      num++;

      //limpiar los campos del input una vez calcule el valor de colones
      document.querySelector("#txt-nombre").value = "";
      document.querySelector("#txt-apellido").value = "";
      document.querySelector("#txt-cargo").value = "";
    }
  }
};

let limpiar = () => {
  num = 1;
  //   Limpia los campos de texto a darle click a borrar
  document.querySelector("#txt-nombre").value = "";
  document.querySelector("#txt-apellido").value = "";
  document.querySelector("#txt-cargo").value = "";

  //Limpia todo el contenido de la tabla
  document.getElementById("tabla").innerHTML = "";
};
