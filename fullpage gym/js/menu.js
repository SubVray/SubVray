document.querySelector(".second-button").addEventListener("click", function () {
  document.querySelector(".animated-icon2").classList.toggle("open");
});



$("main").scrollspy({ target: "#spy" });
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy("refresh");
});