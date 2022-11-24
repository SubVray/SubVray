let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");
let body = document.querySelector("body");
let modal = document.querySelector(".modal-container");
let nextPrev = document.querySelector("#next-prev");
let imgProductModal = document.querySelector("#img-product-modal");
let HtmlSku = document.querySelector("#SKU");
let imgCarrito = document.querySelector("#img-carrito");
let subBebes = document.querySelector("#sub-bebes");

// variables input cantidad
let textCantidad = document.getElementById("txt-cantidad");
let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let nCantidad = 1;

// carrito
let allTienda = [{}];
let carrito = [];
let newProduct = {};
let addCarito = document.getElementById("add-carrito");
let showCarritoC = document.getElementById("offcanvas-body");
let productCounter = document.getElementById("product-counter");
let montoTotal = 0;

// bebes
let tiendaContainer = document.querySelector("#tienda");
let tiendaAccesorios = document.querySelector("#tienda-Accesorios");
let navUrl = document.querySelector("#urlnav");

// carousel mini modal product
let foto, carousel, total;
foto = 0;
carousel = {};
total = 0;

if (window.location != "http://127.0.0.1:5500/juegueteriadebigotes/home.html"){

}
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
  addCarito.addEventListener("click", agregarproducto);
  document.addEventListener("DOMContentLoaded", () => {
    //localStorage.getItem devuelve el valor clave llamado tweets
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    crearHTML();
  });
}

const createStore = () => {
  if (
    window.location == "http://127.0.0.1:5500/juegueteriadebigotes/home.html" ||
    window.location == "http://127.0.0.1:5501/juegueteriadebigotes/home.html"
  ) {
    allTienda = productsHome;
  } else if (
    window.location ==
      "http://127.0.0.1:5500/juegueteriadebigotes/bebes.html" ||
    window.location == "http://127.0.0.1:5501/juegueteriadebigotes/bebes.html"
  ) {
    allTienda = tiendaBebes;
  }

  createItemsProducts(allTienda);
};

function agregarproducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const curso = e.target.parentElement.parentElement;
    leerDatosProducto(curso);
  }
}

// leer los datos de los cursos
function leerDatosProducto(product) {
  console.log(product);
  newProduct = {
    id: product.querySelector("#SKU").textContent,
    name: product.querySelector("#descripcion").textContent,
    imgProduct: product.querySelector("#img-carrito").src,
    price: product.querySelector("#precio").textContent,
    cantidad: 1,
  };

  if (carrito.some((prod) => prod.id === newProduct.id)) {
    const cursos = carrito.map((prod) => {
      if (prod.id === newProduct.id) {
        let cantidad = parseInt(prod.cantidad);
        cantidad++;
        prod.cantidad = cantidad;
        return prod;
      } else {
        return prod;
      }
    });
    carrito = [...cursos];
  } else {
    carrito = [...carrito, newProduct];
  }
  sincronizarStorage();
  crearHTML();
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: "El juguete se ha agregado correctamente al carrito ",
    showConfirmButton: false,
    timer: 1500,
  });
}

function sincronizarStorage() {
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

const showCarrito = () => {
  sincronizarStorage();
};

// modal carrito
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
    let titlePrice = "Precio: ₡";

    // add classes
    cardsProduct.classList.add("card", "my-3", "card-product");
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
    titleCard.classList.add("name-cart-product", "fw-bold");
    //  row2
    row2.classList.add("row", "px-2");
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
    skuP.classList.add("fw-semibold");
    cantidadP.classList.add("fw-semibold");
    priceP.classList.add("fw-semibold");
    btnBorrar.classList.add("btn", "btn-delete");

    // content
    titleCard.innerText = product.name;
    imgP.src = product.imgProduct;
    imgP.alt = product.name;
    skuP.innerText = `${titleSKu} ${product.id}`;
    cantidadP.innerText = `${titleCantidad} ${Number(product.cantidad)}`;
    priceP.innerText = `${titlePrice}${
      Number(product.price) * Number(product.cantidad)
    }
    `;
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

const changeFilterBebes = () => {
  if (subBebes.value == "Juguetes") {
    navUrl.innerHTML = "Jueguetes";
    tiendaAccesorios.style.display = "none";
    tiendaContainer.style.display = "flex";
    window.location.reload();
  } else if (subBebes.value == "Accesorios") {
    navUrl.innerHTML = "Accesorios";
    tiendaContainer.style.display = "none";
    tiendaAccesorios.style.display = "flex";
    createItemsSubCategories(accesoriosBebe);
  }
};

// creacion de productos
const createItemsSubCategories = (allItemsCategories) => {
  let tienda = document.querySelector("#tienda-Accesorios");
  allItemsCategories.forEach((product) => {
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
    name.classList.add("descripcion", "pt-3");
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
      precioSeleccionado.innerText = Number(product.price);
      imgCarrito.src = product.imgUrl;
      imgCarrito.style.display = "none";
      HtmlSku.innerText = product.SKU;
      HtmlSku.style.display = "none";

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
      if (carousel[1].ima == undefined) {
        nextPrev.classList.add("d-none");
      }
    });
  });
};

const createItemsProducts = (allTienda) => {
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
    cols.classList.add("product", "col-sm-6", "col-md-6", "col-lg-4");
    item.classList.add("item-product", "bg-white");
    imgcontainer.classList.add("contenedor-foto");
    imgProduct.classList.add("img-fluid");
    name.classList.add("descripcion", "pt-3");
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
      precioSeleccionado.innerText = Number(product.price);
      imgCarrito.src = product.imgUrl;
      imgCarrito.style.display = "none";
      HtmlSku.innerText = product.SKU;
      HtmlSku.style.display = "none";

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

      if (carousel[1].ima == undefined) {
        nextPrev.classList.add("d-none");
      } else {
        nextPrev.classList.remove("d-none");
      }
    });
  });
};

createStore();
