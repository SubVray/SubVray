let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");
let body = document.querySelector("body");
let modal = document.querySelector(".modal-container");
let nextPrev = document.querySelector("#next-prev");
let imgProductModal = document.querySelector("#img-product-modal");

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

const createStore = () => {
  let tienda = document.querySelector("#tienda");
  products.forEach((product) => {
    let cols = document.createElement("div");
    let name = document.createElement("h3");
    let sku = document.createElement("p");
    let price = document.createElement("p");
    let salePrice = document.createElement("p");
    let imgProduct = document.createElement("img");
    let imgProduct2 = document.createElement("img");
    let imgProduct3 = document.createElement("img");
    let item = document.createElement("div");
    let imgcontainer = document.createElement("div");

    // agregar info a elementos
    imgProduct.src = product.imgUrl;
    imgProduct2.src = product.imgUrl2;
    imgProduct3.src = product.imgUrl3;
    name.innerText = product.name;
    sku.innerText = `SKU: ${product.SKU}`;
    price.innerText = `₡ ${product.price.toLocaleString("en-US")}`;
    salePrice.innerText = `₡ ${product.sale.toLocaleString("en-US")}`;

    // agregar clases a elementos
    cols.classList.add("product", "col-sm-6", "col-md-4", "col-lg-4");
    item.classList.add("item-product");
    imgcontainer.classList.add("contenedor-foto");
    imgProduct.classList.add("img-fluid");
    name.classList.add("descripcion");
    price.classList.add("precio");
    salePrice.classList.add("precio");

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
      precioSeleccionado.innerHTML = product.price;

      // carousel pequeño de cada producto
      carousel = [
        {
          ima: product.imgUrl,
        },
        {
          ima: product.imgUrl2,
        },
        {
          ima: product.imgUrl3,
        },
      ];
      imgProductModal.href = carousel[0].ima;
      document.thumb.src = carousel[0].ima;

      if (
        carousel[0].ima != undefined &&
        carousel[1].ima != undefined &&
        carousel[2].ima != undefined
      ) {
        nextPrev.style.display = "block";
      } else {
        nextPrev.style.display = "none";
      }
    });
  });
};

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

createStore();
