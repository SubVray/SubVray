let iva = 0.13;
let servicio = 0.5;

const facturar = () => {
  let nombre = document.getElementById("nombre").value;
  let cliente = document.getElementById("cliente");
  let articulo = document.getElementById("articulo").value;
  let precio = document.getElementById("precio").value;
  let cantidad = document.getElementById("cantidad").value;
  let articuloR = document.getElementById("articuloR");
  let precioR = document.getElementById("precioR");
  let cantidadR = document.getElementById("cantidadR");
  let subtotal = document.getElementById("subtotal");
  let ivaR = document.getElementById("iva");
  let servicioR = document.getElementById("servicio");
  let total = document.getElementById("total");

  cliente.value = nombre;
  articuloR.value = articulo;
  precioR.value = `₡${precio}`;
  cantidadR.value = cantidad;
  subtotal.value = precio * cantidad;
  ivaR.value = iva * subtotal.value;
  servicioR.value = servicio * subtotal.value;
  total.value = parseFloat(
    `${subtotal.value} + ${ivaR.value} + ${servicioR.value}`
  );
};
