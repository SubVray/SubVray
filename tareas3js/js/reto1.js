let username = document.getElementById("username");
let password = document.getElementById("password");
let inputs = document.querySelectorAll("form input");

const login = () => {
  let valid = false;
  inputs.forEach((input) => {
    if (input.value === "") {
      input.style.borderBottomColor = "red";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Compruebe si los credenciales son correctos",
      });
    } else {
      input.style.borderBottomColor = "green";
      validar();
    }
  });
};

const validar = () => {
  if (username.value == "cenfo" && password.value == 123) {
    window.location.href = "bienvenidaReto1.html";
  }
};
