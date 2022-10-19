//Fake Databases de Usuarios y Mascotas (En el mundo real esto está en una DB que es accedida a través del backend)
const usuarios = [{
  nombre: 'Azul',
  mail: 'azulperez@mail.com',
  pass: 'azulcomoelmarazul'
},
{
  nombre: 'Betiana',
  mail: 'betidicarlo@mail.com',
  pass: 'sha23AWx!'
},
{
  nombre: 'Carlos',
  mail: 'lopezcarlosadrian@mail.com',
  pass: 'sanlore2002'
}]


//Todos los elementos del DOM que voy a necesitar
const mailLogin = document.getElementById('emailLogin'),
  passLogin = document.getElementById('passwordLogin'),
  recordar = document.getElementById('recordarme'),
  btnLogin = document.getElementById('login'),
  modalEl = document.getElementById('modalLogin'),
  modal = new bootstrap.Modal(modalEl),
  contTarjetas = document.getElementById('tarjetas'),
  toggles = document.querySelectorAll('.toggles');

//La función de validar se aprovecha del tipo de return que hace el método find (el objeto si lo encuentra, o undefined si no encuentra ninguno que cumpla con la condición)
function validarUsuario(usersDB, user, pass) {
  let encontrado = usersDB.find((userDB) => userDB.mail == user);

  //console.log('Usuario encontrado por validate '+ typeof isFound);
  if (typeof encontrado === 'undefined') {
      return false;
  } else {
      //si estoy en este punto, quiere decir que el mail existe, sólo queda comparar la contraseña
      if (encontrado.pass != pass) {
          return false;
      } else {
          return encontrado;
      }
  }
}

//Guardamos los datos que recuperamos de la database en el storage
function guardarDatos(usuarioDB, storage) {
  const usuario = {
      'name': usuarioDB.nombre,
      'user': usuarioDB.mail,
      'pass': usuarioDB.pass
  }

  storage.setItem('usuario', JSON.stringify(usuario));
}

//Cambio el DOM para mostrar el nombre del usuario logueado, usando los datos del storage
function saludar(usuario) {
  nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}

//Limpiar los storages
function borrarDatos() {
  localStorage.clear();
  sessionStorage.clear();
}

//Recupero los datos que se guardaron y los retorno
function recuperarUsuario(storage) {
  let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
  return usuarioEnStorage;
}


//Esta función revisa si hay un usuario guardado en el storage, y en ese caso evita todo el proceso de login 
function estaLogueado(usuario) {

  if (usuario) {
      saludar(usuario);
      // mostrarInfoPrestamos(opcionesPrestamos); aca es donde necesito que se muestre un simulador de prestamos, o sea el log in
      presentarInfo(toggles, 'd-none');
  }
}

//Esta función nos permite intercambiar la visualización de los elementos del DOM, agregando o sacando la clase d-none. Si el elemento la tiene, se la saco, y si no la tiene, se la agrego. La gata Flora de las funciones sería.
function presentarInfo(array, clase) {
  array.forEach(element => {
      element.classList.toggle(clase);
  });
}



