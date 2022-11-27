let email = document.getElementById("text-email");
let password = document.getElementById("text-password");
let nameUser = document.getElementById("nameUser");
let loginText = document.getElementById("login");
let formLogin = document.querySelectorAll("#form-login input");
const login = () => {
  users.forEach((user) => {
    if (user.email == email && user.password == password) {
      usuarioValidado = true;
      localStorage.setItem("usuarioConectado", JSON.stringify(user));
    }
  });
};

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
      icon: "warning",
      title: "No se ha podido iniciar sesión",
      text: "El correo del usuario o la contraseña son incorrectos",
      confirmButtonText: "Entendido",
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
    });
    nameUser.innerHTML = userConected.name;
    nameUser.classList.remove("d-none");
    loginText.classList.add("d-none");
  }
};

let usuarioConectado = localStorage.getItem("usuarioConectado");
let userConected = JSON.parse(usuarioConectado);
if (userConected !== null) {
  nameUser.innerHTML = userConected.name;
  nameUser.classList.remove("d-none");
  loginText.classList.add("d-none");
}

const cerrarSesion = () => {
  window.localStorage.clear();
  window.location.href = "home.html";
};
