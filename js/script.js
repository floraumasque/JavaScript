//Constantes
const usuarios = [
  {
    nombre: "Florencia",
    mail: "flor@gmail.com",
    pass: "hola",
  },
  {
    nombre: "Francisco",
    mail: "fran@gmail.com",
    pass: "hola",
  },
  {
    nombre: "Mia",
    mail: "mia@gmail.com",
    pass: "hola",
  },
];

const peliculas = [
  {
    nombre: "Forest Gump",
    precio: "$1.600",
    genero: "Drama",
    duracion: "3hs 14m",
    img: "./imagenes/forest.jpg",
  },
  {
    nombre: "Rapidos y Furiosos 8",
    precio: "$1.600",
    genero: "Acción",
    duracion: "2hs 16m ",
    img: "./imagenes/rapidoyfurioso.jpg",
  },
  {
    nombre: "La Huérfana",
    precio: "$1.600",
    genero: "Terror",
    duracion: "2hs 50m",
    img: "./imagenes/lahuerfana.jpg",
  },
  {
    nombre: "Los Fockers",
    precio: "$1.600",
    genero: "Comedia",
    duracion: "1hs 55m",
    img: "./imagenes/losfockers.jpg",
  },
];

//Elementos DOM
const mailLogin = document.getElementById("emailLogin"),
  passLogin = document.getElementById("passwordLogin"),
  recordar = document.getElementById("recordarme"),
  btnLogin = document.getElementById("login"),
  modalEl = document.getElementById("modalLogin"),
  modal = new bootstrap.Modal(modalEl),
  contTarjetas = document.getElementById("tarjetas"),
  toggles = document.querySelectorAll(".toggles");

//Funciones
function validarUsuario(usersDB, user, pass) {
  let encontrado = usersDB.find((userDB) => userDB.mail == user);

  if (typeof encontrado === "undefined") {
    return false;
  } else {
    if (encontrado.pass != pass) {
      return false;
    } else {
      return encontrado;
    }
  }
}

function guardarDatos(usuarioDB, storage) {
  const usuario = {
    name: usuarioDB.nombre,
    user: usuarioDB.mail,
    pass: usuarioDB.pass,
  };

  storage.setItem("usuario", JSON.stringify(usuario));
}

function saludar(usuario) {
  nombreUsuario.innerHTML = `Bienvenid@, <span>${usuario.name}</span>`;
}

function borrarDatos() {
  localStorage.clear();
  sessionStorage.clear();
}

function recuperarUsuario(storage) {
  let usuarioEnStorage = JSON.parse(storage.getItem("usuario"));
  return usuarioEnStorage;
}

function estaLogueado(usuario) {
  if (usuario) {
    saludar(usuario);
    mostrarInfoPeliculas(peliculas);
    presentarInfo(toggles, "d-none");
  }
}

function presentarInfo(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

function mostrarInfoPeliculas(array) {
  contTarjetas.innerHTML = "";
  array.forEach((element) => {
    let html = `<div class="card cardMascota" id="tarjeta${element.nombre}">
                <h3 class="card-header" id="nombreMascota">Nombre: ${element.nombre}</h3>
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id="fotoMascota">
                <div class="card-body">
                    <p class="card-text" id="precioPelicula">Precio de Alquiler: ${element.precio}</p>
                    <p class="card-text" id="generoPelicula">Género: ${element.genero}</p>
                    <p class="card-text" id="duracionPelicula">Duración: ${element.duracion}</p>
                </div>
            </div>`;
    contTarjetas.innerHTML += html;
  });
}

//Eventos 
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  /
  let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);

  if (!data) {
    alert(`Usuario y/o contraseña erróneos`);
  } else {
   
    if (recordar.checked) {
      guardarDatos(data, localStorage);
      saludar(recuperarUsuario(localStorage));
    } else {
      guardarDatos(data, sessionStorage);
      saludar(recuperarUsuario(sessionStorage));
    }
   
    modal.hide();
    
    mostrarInfoPeliculas(peliculas);
    presentarInfo(toggles, "d-none");
  }
  
});

btnLogout.addEventListener("click", () => {
  borrarDatos();
  presentarInfo(toggles, "d-none");
});

window.onload = () => estaLogueado(recuperarUsuario(localStorage));
