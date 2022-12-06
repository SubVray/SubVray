$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        300,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).ready(function () {
  $("button #flechabtn").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        300,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//desaparece el boton ScrollTop al cargar la pagina web
document.getElementById("flechabtn").style.display = "none";

//esconder botón ScrollTop (parte superior)
window.onscroll = function () {
  scrollFunction();
};

//funcion scroll
function scrollFunction() {
  if (
    document.body.scrollTop > 280 ||
    document.documentElement.scrollTop > 280
  ) {
    document.getElementById("flechabtn").style.display = "block";
    document.getElementById("whatsApp-chat").style.bottom = "100px";
  } else {
    document.getElementById("flechabtn").style.display = "none";
    document.getElementById("whatsApp-chat").style.bottom = "30px";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
