let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");
let body = document.querySelector("body");
let modal = document.querySelector(".modal-container");
let nextPrev = document.querySelector("#next-prev");
let imgProductModal = document.querySelector("#img-product-modal");

let subBebes = document.querySelector("#sub-bebes");

let allTienda = [{}];

// variables input cantidad
let textCantidad = document.getElementById("txt-cantidad");
let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let nCantidad = 1;

// carrito
let carrito = [];
let newProduct = {};
let addCarito = document.getElementById("add-carrito");
let showCarritoC = document.getElementById("offcanvas-body");
let productCounter = document.getElementById("product-counter");
let montoTotal = 0;

// carousel mini modal product
let foto, carousel, total;
foto = 0;
carousel = {};
total = 0;

// search fuction
function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("mostrador");
  li = ul.getElementsByClassName("product");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h3")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    //localStorage.getItem devuelve el valor clave llamado tweets
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    crearHTML();
  });
}

const createStore = () => {
  let tienda = document.querySelector("#tienda");
  if (
    window.location == "http://127.0.0.1:5501/juegueteriadebigotes/home.html"
  ) {
    allTienda = productsHome;
  } else if (
    window.location == "http://127.0.0.1:5501/juegueteriadebigotes/bebes.html"
  ) {
    allTienda = tiendaBebes;
  }

  allTienda.forEach((product) => {
    let cols = document.createElement("div");
    let name = document.createElement("h3");
    let sku = document.createElement("p");
    let price = document.createElement("p");
    let salePrice = document.createElement("p");
    let imgProduct = document.createElement("img");
    let item = document.createElement("div");
    let imgcontainer = document.createElement("div");

    // agregar info a elementos
    imgProduct.src = product.imgUrl;
    name.innerText = product.name;
    sku.innerText = `SKU: ${product.SKU}`;
    price.innerText = `₡ ${product.price.toLocaleString("en-US")}`;
    salePrice.innerText = `₡ ${product.sale.toLocaleString("en-US")}`;

    // agregar clases a elementos
    cols.classList.add("product", "col-sm-6", "col-md-4", "col-lg-4");
    item.classList.add("item-product", "bg-white");
    imgcontainer.classList.add("contenedor-foto");
    imgProduct.classList.add("img-fluid");
    name.classList.add("descripcion");
    price.classList.add("precio");
    salePrice.classList.add("precio");
    sku.classList.add("sku");

    // mostrar info en pantalla
    tienda.appendChild(cols);
    cols.appendChild(item);
    imgcontainer.appendChild(imgProduct);
    item.appendChild(imgcontainer);
    item.appendChild(name);
    item.appendChild(sku);
    item.appendChild(price);

    // abrir modal para cada producto
    item.addEventListener("click", () => {
      // estilos para el modal
      mostrador.style.width = "100%";
      seleccion.style.width = "70%";
      modal.style.display = "block";
      seleccion.classList.add("active-modal");
      body.classList.add("scrollDisabled");

      // info a mostrar en el modal
      imgSeleccionada.src = product.imgUrl;
      descripSeleccionada.innerText = product.name;
      precioSeleccionado.innerHTML = `₡ ${product.price.toLocaleString(
        "en-US"
      )}`;

      // carousel pequeño de cada producto
      carousel = [
        {
          ima: product.imgUrl,
        },
        {
          ima: product.imgUrl2,
        },
      ];
      imgProductModal.href = carousel[0].ima;
      document.thumb.src = carousel[0].ima;

      if (carousel[0].ima != undefined && carousel[1].ima != undefined) {
        nextPrev.style.display = "block";
      } else {
        nextPrev.style.display = "none";
      }

      btnMinus.addEventListener("click", fMinus);
      btnPlus.addEventListener("click", fPlus);

      // agregar al carrito

      leerDatosProduct(product);
    });
  });
};

function leerDatosProduct(newProduct) {
  if (newProduct != undefined) {
    CreateNewProduct = {
      id: newProduct.SKU,
      name: newProduct.name,
      imgProduct: newProduct.imgUrl,
      price: newProduct.price,
      cantidad: 1,
    };
    console.log(CreateNewProduct);
    if (carrito.some((prod) => prod.id === CreateNewProduct.id)) {
      const lk = carrito.map((pro) => {
        //si es exactamente igual curso.id e infoCurso.id
        //incrementa la cantidad del curso seleccionado del usuario
        if (pro.id === CreateNewProduct.id) {
          let cantidad = parseInt(CreateNewProduct.cantidad);
          cantidad++;
          CreateNewProduct.cantidad = cantidad;
          return curso;
        } else {
          return curso;
        }
      });
        carrito = [...carrito];
    }
  }

  console.log(newProduct);

  // if (newProduct.id == productSelected.SKU) {
  //   let cantidad = newProduct.cantidad;
  //   cantidad++;

  //   carrito = [...carrito];
  // } else {
  //   // crearHTML();
  //   Swal.fire({
  //     position: "center-center",
  //     icon: "success",
  //     title: "El juguete se ha agregado correctamente al carrito ",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  // }
}

addCarito.addEventListener("click", leerDatosProduct());

function sincronizarStorage() {
  //usando JSON agrega el elemento en la caja de comentarios
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// controles para cambiar la imagen de cda producto
let cambiar = function (mas) {
  total = carousel.length;
  foto += mas;
  if (foto > total) {
    foto = 1;
  }
  if (foto < 1) {
    foto = total;
  }
  document.thumb.src = carousel[foto - 1].ima;
  imgProductModal.href = carousel[foto - 1].ima;
};

// cerrar modal
function cerrar() {
  mostrador.style.width = "100%";
  seleccion.style.width = "0%";
  seleccion.classList.remove("active-modal");
  body.classList.remove("scrollDisabled");
  modal.style.display = "none";
}

// funcion aumentar y bajar cantidadd

const fPlus = () => {
  nCantidad += 1;
  textCantidad.value = nCantidad;
  console.log(nCantidad);
};

const fMinus = () => {
  if (textCantidad.value > 1) {
    nCantidad -= 1;
    textCantidad.value = nCantidad;
    console.log(nCantidad);
  }
};

const showCarrito = () => {
  sincronizarStorage();
  console.log(montoTotal);
};

const crearHTML = () => {
  limpiarHTML();
  productCounter.innerHTML = carrito.length;
  carrito.forEach((product) => {
    let btnBorrar = document.createElement("button");
    let cardsProduct = document.createElement("div");
    // row 1
    let row1 = document.createElement("div");
    let col12 = document.createElement("div");
    let titleCard = document.createElement("h5");
    let hr = document.createElement("hr");
    // row2
    let row2 = document.createElement("div");
    let col4 = document.createElement("div");
    let col5 = document.createElement("div");
    let col3 = document.createElement("div");
    let imgP = document.createElement("img");
    let skuP = document.createElement("span");
    let cantidadP = document.createElement("span");
    let priceP = document.createElement("span");
    let titleSKu = "SKU:";
    let titleCantidad = "Cantidad: ";
    let titlePrice = "Price: ";

    // add classes
    cardsProduct.classList.add("card", "my-3");
    // row1
    row1.classList.add("row");
    col12.classList.add(
      "col-12",
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "pt-4",
      "pb-0"
    );
    titleCard.classList.add("name-cart-product");
    //  row2
    row2.classList.add("row");
    col4.classList.add(
      "col-4",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    imgP.classList.add("img-fluid");
    col5.classList.add(
      "col-5",
      "d-flex",
      "flex-column",
      "justify-content-center",
      "align-items-start"
    );
    col3.classList.add(
      "col-3",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    btnBorrar.classList.add("btn-delete");

    // content
    titleCard.innerText = product.name;
    imgP.src = product.imgProduct;
    imgP.alt = product.name;
    // skuP.innerText = `${titleSKu} ${product.id % 1000000}`;
    skuP.innerText = `${titleSKu} ${product.id}`;
    cantidadP.innerText = `${titleCantidad} ${product.cantidad}`;
    priceP.innerText = `${titlePrice} ${product.price}`;
    btnBorrar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    showCarritoC.appendChild(cardsProduct);
    cardsProduct.appendChild(row1);
    cardsProduct.dataset.productId = product.id;
    row1.appendChild(col12);
    col12.appendChild(titleCard);
    cardsProduct.appendChild(hr);
    cardsProduct.appendChild(row2);
    row2.appendChild(col4);
    col4.appendChild(imgP);
    row2.appendChild(col5);
    col5.appendChild(skuP);
    col5.appendChild(cantidadP);
    col5.appendChild(priceP);
    row2.appendChild(col3);
    col3.appendChild(btnBorrar);
    btnBorrar.addEventListener("click", () => {
      const id = product.id;
      carrito = carrito.filter((product) => product.id != id);
      console.log(id);
      crearHTML();
      sincronizarStorage();
    });
  });
};

function limpiarHTML() {
  while (showCarritoC.firstChild) {
    showCarritoC.removeChild(showCarritoC.firstChild);
  }
}

const changeFilter = () => {
  if (subBebes.value == "Accesorios") {
    allTienda = subBebesItems;
  }
};

// const leerCantidad = () => {};
createStore();
