const langEl = document.querySelector(".langWrap");
const links = document.querySelectorAll("header button");
const h1 = document.querySelector("h1");
const recorrido = document.querySelector(".recorridot");
const inicio = document.querySelector(".inicio");
const promocionesHeader = document.querySelector(".promociones-h");
const sucursales = document.querySelector(".sucursales");
const categoriasHeader = document.querySelector(".categorias-h");
const bebes = document.querySelector(".bebes");
const juegosMesa = document.querySelector(".juegos-mesa");
const deportes = document.querySelector(".deportes");
const nerf = document.querySelector(".nerf");
const motorafina = document.querySelector(".motorafina");
const verano = document.querySelector(".verano");
const textHome = document.querySelector(".text-home");

// titles
const promociones = document.querySelector(".promociones");
const categorias = document.querySelector(".categorias-s");
const textCategoria = document.querySelector(".text-categorias");
const titleTestimoniales = document.querySelector(".title-testimoniales");
const textTestimoniales = document.querySelector(".text-testimoniales");

// login
const titleLogin = document.querySelector(".title-login");
const textEmail = document.querySelector(".text-email");
const inputEmail = document.querySelector(".input-email");
const textPassword = document.querySelector(".text-password");
const inputPassword = document.querySelector(".input-password");

// carrito
const titleCarrito = document.querySelector(".title-carrito");
const titleProductos = document.querySelector(".title-productos");
const titlePrecio = document.querySelector(".title-precio");
const btnPagar = document.querySelector(".btn-pagar");

// perfil.html
const miCompras = document.querySelector(".mis-compras");
const btnLogout = document.querySelector(".btn-logout");
const btnEncuesta = document.querySelector(".btn-encuesta");
const labelDia = document.querySelector(".label-dia");
const optionDia = document.querySelector(".option-dia");
const labelMes = document.querySelector(".label-mes");
const optionMes = document.querySelector(".option-mes");
let fecha = document.querySelector(".fecha");
// encuesta
const titleEncuesta = document.querySelector(".title-encuesta");
const titleE1 = document.querySelector(".title-e-1");
const titleE2 = document.querySelector(".title-e-2");
const titleE3 = document.querySelector(".title-e-3");
const titleE4 = document.querySelector(".title-e-4");
const titleE5 = document.querySelector(".title-e-5");
// radios encuesta
const malo = document.querySelectorAll(".malo");
const regular = document.querySelectorAll(".regular");
const bueno = document.querySelectorAll(".bueno");
const muyBueno = document.querySelectorAll(".muybueno");
const excelente = document.querySelectorAll(".excelente");
// btns encuesta
const btnEnviar = document.querySelector(".btn-calcular");
const btnReset = document.querySelector(".btn-limpiar");

// categories images
const imgBebes = document.querySelector(".img-bebes");
const imgJuegosMesa = document.querySelector(".img-juegos-mesa");
const imgDeportes = document.querySelector(".img-deportes");
const imgNerf = document.querySelector(".img-nerf");
const imgMotoraFina = document.querySelector(".img-motorafina");
const imgVerano = document.querySelector(".img-verano");

// tira testimonial
const comentario1 = document.querySelector(".comentario-cliente-1");
const comentario2 = document.querySelector(".comentario-cliente-2");
const comentario3 = document.querySelector(".comentario-cliente-3");
const comentario4 = document.querySelector(".comentario-cliente-4");
const comentario5 = document.querySelector(".comentario-cliente-5");
const comentario6 = document.querySelector(".comentario-cliente-6");

// footer
const titleContactenos = document.querySelector(".title-contactenos");
const titleAcerca = document.querySelector(".title-acerca");
const titleSecciones = document.querySelector(".title-secciones");
const text1 = document.querySelector(".text-1");
const text2 = document.querySelector(".text-2");
const text3 = document.querySelector(".text-3");
const sct1 = document.querySelector(".sct-1");
const sct2 = document.querySelector(".sct-2");
const sct3 = document.querySelector(".sct-3");
const sct4 = document.querySelector(".sct-4");
const sct5 = document.querySelector(".sct-5");

links.forEach((r) => {
  r.addEventListener("click", () => {
    const attr = r.getAttribute("language");

    inicio.textContent = changeLanguage[attr].inicio;
    promocionesHeader.textContent = changeLanguage[attr].promocionesHeader;
    sucursales.textContent = changeLanguage[attr].sucursales;
    categoriasHeader.textContent = changeLanguage[attr].categoriasHeader;
    bebes.textContent = changeLanguage[attr].bebes;
    juegosMesa.textContent = changeLanguage[attr].juegosMesa;
    deportes.textContent = changeLanguage[attr].deportes;
    nerf.textContent = changeLanguage[attr].nerf;
    motorafina.textContent = changeLanguage[attr].motorafina;
    verano.textContent = changeLanguage[attr].verano;

    // perfil
    if (
      window.location ==
        "http://127.0.0.1:5501/juegueteriadebigotes/perfil.html" ||
      window.location ==
        "http://127.0.0.1:5500/juegueteriadebigotes/perfil.html"
    ) {
      miCompras.textContent = changeLanguage[attr].miCompras;
      labelMes.textContent = changeLanguage[attr].labelMes;
      optionMes.textContent = changeLanguage[attr].optionMes;
      labelDia.textContent = changeLanguage[attr].labelDia;
      optionDia.textContent = changeLanguage[attr].optionDia;
      fecha.textContent = changeLanguage[attr].fecha;
      btnLogout.textContent = changeLanguage[attr].btnLogout;
      btnEncuesta.textContent = changeLanguage[attr].btnEncuesta;
      titleEncuesta.textContent = changeLanguage[attr].titleEncuesta;
      titleE1.textContent = changeLanguage[attr].titleE1;
      titleE2.textContent = changeLanguage[attr].titleE2;
      titleE3.textContent = changeLanguage[attr].titleE3;
      titleE4.textContent = changeLanguage[attr].titleE4;
      titleE5.textContent = changeLanguage[attr].titleE5;
      btnEnviar.textContent = changeLanguage[attr].btnEnviar;
      btnReset.textContent = changeLanguage[attr].btnReset;
      malo.forEach((malo) => {
        malo.textContent = changeLanguage[attr].malo;
      });
      regular.forEach((regular) => {
        regular.textContent = changeLanguage[attr].regular;
      });
      bueno.forEach((bueno) => {
        bueno.textContent = changeLanguage[attr].bueno;
      });
      muyBueno.forEach((muyBueno) => {
        muyBueno.textContent = changeLanguage[attr].muyBueno;
      });
      excelente.forEach((excelente) => {
        excelente.textContent = changeLanguage[attr].excelente;
      });
    }

    if (
      window.location ==
        "http://127.0.0.1:5500/juegueteriadebigotes/home.html" ||
      window.location ==
        "http://127.0.0.1:5501/juegueteriadebigotes/home.html" ||
      window.location ==
        "http://127.0.0.1:5501/juegueteriadebigotes/home.html#ofertas" ||
      window.location ==
        "http://127.0.0.1:5500/juegueteriadebigotes/home.html#ofertas"
    ) {
      h1.textContent = changeLanguage[attr].h1;
      recorrido.textContent = changeLanguage[attr].recorrido;
      imgBebes.src = changeLanguage[attr].imgBebes;
      imgJuegosMesa.src = changeLanguage[attr].imgJuegosMesa;
      imgDeportes.src = changeLanguage[attr].imgDeportes;
      imgNerf.src = changeLanguage[attr].imgNerf;
      imgMotoraFina.src = changeLanguage[attr].imgMotoraFina;
      imgVerano.src = changeLanguage[attr].imgVerano;

      // titles
      promociones.textContent = changeLanguage[attr].promociones;
      categorias.textContent = changeLanguage[attr].categorias;
      textCategoria.textContent = changeLanguage[attr].textCategoria;
      titleTestimoniales.textContent = changeLanguage[attr].titleTestimoniales;
      textTestimoniales.textContent = changeLanguage[attr].textTestimoniales;

      // comentarios
      comentario1.textContent = changeLanguage[attr].comentario1;
      comentario2.textContent = changeLanguage[attr].comentario2;
      comentario3.textContent = changeLanguage[attr].comentario3;
      comentario4.textContent = changeLanguage[attr].comentario4;
      comentario5.textContent = changeLanguage[attr].comentario5;
      comentario6.textContent = changeLanguage[attr].comentario6;
      textHome.textContent = changeLanguage[attr].textHome;
    }
    // carrito
    titleLogin.textContent = changeLanguage[attr].titleLogin;
    titleCarrito.textContent = changeLanguage[attr].titleCarrito;
    titleProductos.textContent = changeLanguage[attr].titleProductos;
    titlePrecio.textContent = changeLanguage[attr].titlePrecio;
    btnPagar.textContent = changeLanguage[attr].btnPagar;
    textEmail.textContent = changeLanguage[attr].textEmail;
    $(".input-email").attr("placeholder", changeLanguage[attr].inputEmail);
    $(".input-password").attr(
      "placeholder",
      changeLanguage[attr].inputPassword
    );
    textPassword.textContent = changeLanguage[attr].textPassword;

    // footer
    titleContactenos.textContent = changeLanguage[attr].titleContactenos;
    titleAcerca.textContent = changeLanguage[attr].titleAcerca;
    titleSecciones.textContent = changeLanguage[attr].titleSecciones;
    text1.textContent = changeLanguage[attr].text1;
    text2.textContent = changeLanguage[attr].text2;
    text3.textContent = changeLanguage[attr].text3;
    sct1.textContent = changeLanguage[attr].sct1;
    sct2.textContent = changeLanguage[attr].sct2;
    sct3.textContent = changeLanguage[attr].sct3;
    sct4.textContent = changeLanguage[attr].sct4;
    sct5.textContent = changeLanguage[attr].sct5;
  });
});

let changeLanguage = {
  spanish: {
    h1: "Encuentra los mejores juguetes",
    recorrido: "Ver recorrido",
    inicio: "Inicio",
    promocionesHeader: "Promociones",
    sucursales: "Sucursales",
    categoriasHeader: "Categorías ",
    bebes: "Bebes",
    juegosMesa: "Juegos de mesa",
    deportes: "Deportes",
    nerf: "Armas Nerf",
    motorafina: "Motorafina",
    verano: "Verano",
    textHome: "Promociones para este mes de Diciembre",

    // agregar titulos
    promociones: "Promociones",
    categorias: "Categorías ",
    textCategoria: "Contamos con una gran cantidad de juguetes",
    titleTestimoniales: "Testimoniales",
    textTestimoniales:
      "Comentarios de clientes satisfechos de sus compras en jugueteria de bigotes.",
    titleLogin: "Iniciar Sesión",
    textEmail: "Correo Electrónico:",
    inputEmail: "Correo Electrónico:",
    textPassword: "Contraseña:",
    inputPassword: "Contraseña:",

    // carrito
    titleCarrito: "Carrito",
    titleProductos: "Productos:",
    titlePrecio: "Precio Total:",
    btnPagar: "Pagar",

    // perfil
    miCompras: "Mis Compras",
    labelMes: "Mes",
    optionMes: "Mes",
    btnLogout: "Cerrar sesión",
    btnEncuesta: "Encuesta",
    labelDia: "Dia",
    optionDia: "Dia",
    fecha: "Fecha:",

    // encuesta
    titleEncuesta: "Encuesta",
    titleE1: "Calidad general:",
    titleE2: "Experiencia de compra:",
    titleE3: "Experiencia de primer uso:",
    titleE4: "Calidad de Producto:",
    titleE5:
      "Servicio posterior a la compra (garantía, atención al cliente, etc.):",

    // radios
    malo: "Malo",
    regular: "Regular",
    bueno: "Bueno",
    muyBueno: "Muy Bueno",
    excelente: "Excelente",

    // btns encuesta
    btnEnviar: "Enviar",
    btnReset: "Limpiar",

    // images categories
    imgBebes: "images/categorias/bebes.png",
    imgJuegosMesa: "images/categorias/juegosmesa.gif",
    imgDeportes: "images/categorias/deportes.png",
    imgNerf: "images/categorias/armas-nerf.png",
    imgMotoraFina: "images/categorias/motorafina.png",
    imgVerano: "images/categorias/verano.png",

    // testimonial
    comentario1: "Tienen los mejores juguetes!",
    comentario2:
      "Mis juguetes acaban de llegar. Es muuuy hermoso. Gracias por enviarlo tan rápido. ¡Espero con ansias las otras cosas que pedí!",
    comentario3:
      "¡Estos juguetes son mis cosas favoritas absolutas para regalar!",
    comentario4:
      "La calidad es insuperable. Puedes usar y usar esto y se mantiene como nuevo.",
    comentario5: "Mis hijos están muy contentos con sus juguetes",
    comentario6:
      "¡Siempre hay algo en los juguetes que me llaman mucho la atención y quiero seguir viniendo a comprar mas en esta tienda es super recomendada !",

    // footer
    titleContactenos: "Contáctenos",
    titleAcerca: "Acerca de nuestra tienda",
    titleSecciones: "Secciones",
    text1:
      "Jugueterías de Bigotes, abrió sus puertas por primera vez el 14 de noviembre de 1970, bajo la visión de su fundadora, la señora Reina Madrid. Encargada de distribuir sonrisas a los niños de Costa Rica; de ahí nuestra frase emblemática: 'Distribuir Sonrisas es Nuestra Pasión'.",
    text2:
      "Actualmente Jugueterías de Bigotes cuenta con 14 Tiendas, al servicio de nuestros clientes, ubicadas en todo el país, donde nuestros clientes pueden encontrar las mejores marcas del mercado.",
    text3:
      "Jugueterías de Bigotes es hoy en día una empresa con gran crecimiento y proyección a la comunidad con programas de Responsabilidad Social Empresarial, actividades dirigidas a niños de escasos recursos y donaciones puntuales dirigidas a proyectos que le dan la mano a la niñez costarricense.",
    sct1: "Inicio",
    sct2: "Promociones",
    sct3: "Categorias",
    sct4: "Nuestras Marcas",
    sct5: "Reclamos y Quejas",
  },

  // TODO: english
  english: {
    h1: " Find the best toys",
    recorrido: "See tour",
    inicio: "Home",
    promocionesHeader: "Promotions",
    sucursales: "Branches",
    categoriasHeader: "categories ",
    bebes: "Babies",
    juegosMesa: "Table games",
    deportes: "Sports",
    nerf: "Gun Nerf",
    motorafina: "Fine Motor Skills ",
    verano: "Summer",
    textHome: "Promotions for this month of December",

    // agregar titulos
    promociones: "Promotions",
    categorias: "categories ",
    textCategoria: "We have a wide range of toys",
    titleTestimoniales: "Testimonials",
    textTestimoniales:
      "Comments from satisfied customers about their purchases at Jugueteria de Bigotes.",
    titleLogin: "Login",
    textEmail: "Email:",
    inputEmail: "Email:",
    textPassword: "Password:",
    inputPassword: "Password:",

    // carrito
    titleCarrito: "Shopping Cart",
    titleProductos: "Products:",
    titlePrecio: "Total Price:",
    btnPagar: "Pay",

    // perfil
    miCompras: "My purchases",
    btnLogout: "Logout",
    btnEncuesta: "Survey",
    labelMes: "Month",
    optionMes: "Month",
    labelDia: "Day",
    optionDia: "Day",
    fecha: "Date:",

    // encuesta
    titleEncuesta: "Survey",
    titleE1: "General quality:",
    titleE2: "Shopping experience:",
    titleE3: "First use experience:",
    titleE4: "Product Quality:",
    titleE5: "Post-purchase service ( warranty, attention to client, etc. ):",

    // radios
    malo: "Bad",
    regular: "Regular",
    bueno: "Good",
    muyBueno: "Very good ",
    excelente: "Excellent",

    // btns encuesta
    btnEnviar: "Send",
    btnReset: "Delete",

    // images categories
    imgBebes: "images/categorias/babies.png",
    imgJuegosMesa: "images/categorias/tablegames.gif",
    imgDeportes: "images/categorias/sports.png",
    imgNerf: "images/categorias/nerfguns.png",
    imgMotoraFina: "images/categorias/finemotorskills.png",
    imgVerano: "images/categorias/summer.png",

    // testimonials
    comentario1: "They have the best toys!",
    comentario2:
      "My toys just arrived. It is very beautiful. Thank you for sending it so quickly, I look forward to the other things I ordered!",
    comentario3: "These toys are my absolute favorite things to give as gifts!",
    comentario4:
      "The quality is second to none. You can wear and wear this and it stays like new.",
    comentario5: "My children are very happy with their toys",
    comentario6:
      "There is always something in the toys that catch my attention and I want to keep coming back to buy more in this store is super recommended !",

    // footer
    titleContactenos: "Contact us",
    titleAcerca: "About our store",
    titleSecciones: "Sections",
    text1:
      "Jugueterías de Bigotes, first opened its doors on November 14, 1970, under the vision of its founder, Mrs. Reina Madrid. In charge of distributing smiles to the children of Costa Rica; hence our emblematic phrase: 'Distribuir Sonrisas es Nuestra Pasión' (Distributing Smiles is Our Passion).",
    text2:
      "Currently Jugueterías de Bigotes has 14 stores, at the service of our customers, located throughout the country, where our customers can find the best brands in the market.",
    text3:
      "Jugueterías de Bigotes is today a company with great growth and projection to the community with Corporate Social Responsibility programs, activities aimed at low-income children and specific donations to projects that give a hand to Costa Rican children.",
    sct1: "Home",
    sct2: "Promotions",
    sct3: "Categories",
    sct4: "Our Brands",
    sct5: "Claims and complaints",
  },
};
