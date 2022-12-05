let email = document.getElementById("text-email");
let password = document.getElementById("text-password");
let nameUser = document.getElementById("nameUser");
let loginText = document.getElementById("login");
let formLogin = document.querySelectorAll("#form-login input");

// let register

let inputNameRegister = document.getElementById("text-name-register");
let inputEmailRegister = document.getElementById("text-email-register");
let inputPasswordRegister = document.getElementById("text-password-register");
let inputUsernameRegister = document.getElementById("text-username-register");

let usuarioRegistrado = localStorage.getItem("usuarioRegistrado");
let usuarioRegistradoData = JSON.parse(usuarioRegistrado);

const iniciarSesion = () => {
  let emailLogin = email.value;
  let passwordLogin = password.value;

  validarCredenciales(emailLogin, passwordLogin);
};

const validarCredenciales = (emailLogin, passwordLogin) => {
  let usuarioValidado = false;
  if (usuarioRegistradoData) {
    usuarioRegistradoData.forEach((user) => {
      if (user.email == emailLogin && user.password == passwordLogin) {
        usuarioValidado = true;
        localStorage.setItem("usuarioConectado", JSON.stringify(user));
      }
    });
  } else {
    users.forEach((user) => {
      if (user.email == emailLogin && user.password == passwordLogin) {
        usuarioValidado = true;
        localStorage.setItem("usuarioConectado", JSON.stringify(user));
      }
    });
  }

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
      html: '<iframe src="https://embed.lottiefiles.com/animation/76705"></iframe> <p class="fw-bold">No se ha podido iniciar sesión</p> <p class="fw-bold">El correo del usuario o la contraseña son incorrectos o hay campos vacíos</p>',
      confirmButtonColor: "#ffae00",
    }).then(() => {
      document.getElementById("login").click();
      loginText.href = "#modal-login";
    });
  } else {
    let usuarioConectado = localStorage.getItem("usuarioConectado");
    let userConected = JSON.parse(usuarioConectado);
    Swal.fire({
      icon: "success",
      title: "Inicio de sesión Exitosamente",
      html: `Hola! ${userConected.name}`,
      confirmButtonText: "Entendido",
      confirmButtonColor: "#ffae00",
    }).then(() => {
      localStorage.removeItem("usuarioRegistrado");
      window.location.reload();
    });
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

//  register

const register = () => {
  let usuarioValidado = false;
  document.querySelectorAll("#form-register input").forEach((input) => {
    if (input.value == "") {
      usuarioValidado = false;
      Swal.fire({
        icon: "warning",
        title: "Debe completar todos los campos en rojo",
      });
      input.classList.add("input-invalid");
    } else {
      usuarioValidado = true;
      input.classList.remove("input-invalid");
      input.classList.add("input-valid");
    }
  });

  if (usuarioValidado == true) {
    let newUserRegister = [
      {
        name: inputNameRegister.value,
        username: inputUsernameRegister.value,
        email: inputEmailRegister.value,
        password: inputPasswordRegister.value,
      },
    ];
    localStorage.setItem("usuarioRegistrado", JSON.stringify(newUserRegister));
    Swal.fire({
      icon: "success",
      title: "Se ha registrado correctamente",
    }).then(() => {
      window.location.reload();
    });
    document.getElementById("btn-login").click();
  }
};

if (usuarioRegistrado) {
  document.getElementById("btn-login").click();
}
