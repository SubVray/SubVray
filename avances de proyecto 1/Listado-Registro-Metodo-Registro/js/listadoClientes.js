const cuerpoTabla = document.querySelector("#tbl-users tbody");

const llenarTabla = () => {
  // limpia el contenido que tiene el cuerpo de la tabla
    // cuerpoTabla.innerHTML = "";

  clientes.forEach((metodoPago) => {
    let fila = cuerpoTabla.insertRow(); //crea una fila
    fila.insertCell().textContent = metodoPago.ID;
    fila.insertCell().textContent = metodoPago.Nombre;
    fila.insertCell().textContent = metodoPago.Usuario;
    fila.insertCell().textContent = metodoPago.numero;
    fila.insertCell().textContent = metodoPago.email;

    // creacion de las celdas de los botones
    let tdAcciones = fila.insertCell();

    // creacion de los botones de las acciones editar y eliminar
    //Para iteracion solo debe mostrar un mensaje

    // boton de editar
    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.type = "button";
    btnEditar.classList.add("btn-editar");

    // boton de borrar
    let btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.type = "button";
    btnBorrar.classList.add("btn-eliminar");

    btnBorrar.addEventListener("click", () => {
      Swal.fire({
        title: "¿Esta seguro que desea eliminar esta informacion?",
        text: "La acción no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#18b158",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title:"La informacion se ha eliminado correctamente!",
            confirmButtonColor: "#18b158",
            confirmButtonText: "Ok",
          }
          );
        }
      });
    });

    // agregar boton de editar a la celda de acciones
    tdAcciones.appendChild(btnEditar);

    // agregar boton de Eliminar a la celda de acciones
    tdAcciones.appendChild(btnBorrar);
  });
};
llenarTabla();
