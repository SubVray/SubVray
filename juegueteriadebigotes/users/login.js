let email = document.getElementById("text-email");
let password = document.getElementById("text-password");
let nameUser = document.getElementById("nameUser");
let loginText = document.getElementById("login");
let formLogin = document.querySelectorAll("#form-login input");



const iniciarSesion = () => {
  let emailLogin = email.value;
  let passwordLogin = password.value;

  validarCredenciales(emailLogin, passwordLogin);
};

const validarCredenciales = (emailLogin, passwordLogin) => {
  let usuarioValidado = false;
  users.forEach((user) => {
    if (user.email == emailLogin && user.password == passwordLogin) {
      usuarioValidado = true;
      localStorage.setItem("usuarioConectado", JSON.stringify(user));
    }
  });

  if (usuarioValidado == false) {
    formLogin.forEach((input) => {
      if (input.value == "") {
        input.classList.remove("input-ivalid");
        input.classList.add("input-invalid");
      } else {
        input.classList.remove("input-invalid");
        input.classList.add("input-valid");
      }
    });
    Swal.fire({
      // icon: "warning",
      confirmButtonText: "Entendido",
      html: '<iframe src="https://embed.lottiefiles.com/animation/76705"></iframe> <p class="fw-bold">No se ha podido iniciar sesión</p> <p class="fw-bold">El correo del usuario o la contraseña son incorrectos</p>',
      confirmButtonColor: "#ffae00",
    }).then(() => {
      loginText.click();
    });
  } else {
    let usuarioConectado = localStorage.getItem("usuarioConectado");
    let userConected = JSON.parse(usuarioConectado);
    Swal.fire({
      icon: "success",
      title: "Inicio de sesión correcto",
      html: `Bienvenido ${userConected.name}`,
      confirmButtonText: "Entendido",
      confirmButtonColor: "#ffae00",
    }).then(() => {
      document.querySelector(".toast").classList.add("show");
    });
    nameUser.innerHTML = userConected.username;
    nameUser.classList.remove("d-none");
    loginText.classList.add("d-none");
  }
};

let usuarioConectado = localStorage.getItem("usuarioConectado");
let userConected = JSON.parse(usuarioConectado);
if (userConected !== null) {
  nameUser.innerHTML = userConected.username;
  nameUser.classList.remove("d-none");
  loginText.classList.add("d-none");
}

const cerrarSesion = () => {
  window.localStorage.clear();
  window.location.href = "home.html";
};
