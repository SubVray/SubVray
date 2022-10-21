let irRetos = () => {
  let retos = document.querySelector("#retos-select").value;
  retos = parseInt(retos);
  switch (retos) {
    case 0:
      window.location.href = "index.html";
      break;
    case 1:
      window.location.href = "reto1.html";
      break;
    case 2:
      window.location.href = "reto2.html";
      break;
    case 3:
      window.location.href = "reto3.html";
      break;
    case 4:
      window.location.href = "reto4.html";
      break;
    case 5:
      window.location.href = "reto5.html";
      break;
    case 6:
      window.location.href = "reto6.html";
      break;
    case 7:
      window.location.href = "reto7.html";
      break;
    case 8:
      window.location.href = "reto8.html";
      break;
    case 9:
      window.location.href = "reto9.html";
      break;
    case 10:
      window.location.href = "reto10.html";
      break;
  }
};
