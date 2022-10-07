// // Esto es un simulador de préstamo existente y refinanciación

let claveGuardada = "hola";

class Prestamo {

  constructor(monto, cuotas, sistema, codigo) {
    this.monto = parseInt(monto);
    this.cuotas = parseInt(cuotas);
    this.sistema = sistema;
    this.codigo = codigo;
  }
}
const prestamos = [
  new Prestamo(100000, 6, "francés", 1254),
  new Prestamo(8000, 6, "alemán", 1390),
  new Prestamo(172560, 12, "francés", 1398),
  new Prestamo(234000, 24, "alemán", 1456),
  new Prestamo(345675, 36, "francés", 1567),
]

function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let claveUsuario = prompt(
      "Ingresá tu contraseña. Tenés " +
      (i + 1) +
      " intentos antes de bloquearla."
    );

    if (claveUsuario === claveGuardada) {
      alert("Usuario logueado exitosamente. Hola Mabel");
      ingresar = true;
      break;
    } else {
      alert("Contraseña erronea. Te quedan " + i + " intentos.");
    }
  }

  return ingresar;
}

if (login()) {
  let cuotas = 10;
  let codigo = 1233

  let opcion = prompt('Qué querés realizar hoy?: \n1- Cuántas cuotas me quedan por pagar de mi préstamo? \n2 - Precancelar cuotas. \n3 - Refinanciar mi préstamo. \n4 - Solicitar nuevo préstamo (solo podrás acceder a un préstamo más) \nPresioná X para finalizar.').toLowerCase();



    while (opcion != 'x') {

    switch (opcion) {
      case "1":
        alert("Te restan " + cuotas + " cuotas para finalizar tu prestamo");
        break;

      case "2":
        let precancelar = parseInt(
          prompt("Ingresa cantidad de cuotas a cancelar")
        );
        if (precancelar <= cuotas) {
          cuotas -= precancelar;

          alert(
            "La operación fue relizada exitosamente. Te restan " +
            cuotas +
            " cuotas para finalizar tu prestamo"
          );
        } else {
          alert(
            "la cantidad de cuotas a precancelar supera la totalidad de cuotas totales"
          );
        }
        break;

      case "3":
        let refinanciar = parseInt(
          prompt("Cuantas cuotas queres agregar a tu prestamo?")
        );
        cuotas += refinanciar;

        alert(
          "La operación fue relizada exitosamente. Tu nuevo prestamo es de " +
          cuotas +
          " y fue acreditado en tu caja de ahorros"
        );
        break;

 

     case "4":
        let monto = parseInt(prompt("Qué monto necesitás?"));
        let cuotas = prompt(
          "En qué cantidad de cuotas lo querés? Podés elegir entre las siguientes opciones \n6 \n12 \n24"
        );
        let sistema =
          prompt(
            "Qué sistema querés que apliquemos a tu préstamo? podés elegir entre sistema francés o alemán"
          );

        alert(
          "La operación fue relizada exitosamente. \nMONTO NUEVO PRÉSTAMO: $ " +
          monto + " \nCANTIDAD DE CUOTAS: " + cuotas + " \nSISTEMA DE AMORTIZACIÓN: " + sistema + " \nCODIGO DE TRANSACCIÓN: " + codigo + "."
        );
        const nuevoPrestamo = new Prestamo(monto, cuotas, sistema, 1234);

        prestamos.push(nuevoPrestamo);
        break;


      default:
        alert("La opcion es incorrecta");
        break;
    }

    opcion = prompt(
      "Qué queres realizar hoy?: \n1- Cuántas cuotas me quedan por pagar de mi prestamo? \n2 - Precancelar cuotas. \n3 - Refinanciar mi prestamo en mas cuotas. \nPresioná X para finalizar."
    );
  }
} else {
  alert(
    "Por favor escribinos a nuestro chat de soporte para reestablecer la contraseña"
  );
}

alert("Gracias por operar con PrestaBank!");

