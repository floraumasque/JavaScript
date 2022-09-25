// Esto es un simulador de préstamo existente y refinanciación

let savedKey = 'hola';

function login() {
    
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {

        let userKey = prompt('Ingresá tu contraseña. Tenés ' + (i + 1) + ' intentos antes de bloquearla.');

        if (userKey === savedKey) {

            alert('Usuario logueado exitosamente. Hola Mabel');
            ingresar = true;
            break;

        } else {

            alert('Contraseña erronea. Te quedan ' + i + ' intentos.');

        }

    }

    return ingresar;

}


if (login()) {
    
    let cuotas = 10;

    let opcion = prompt('Qué querés realizar hoy?: \n1- Cuántas cuotas me quedan por pagar de mi préstamo? \n2 - Precancelar cuotas. \n3 - Refinanciar mi préstamo. \nPresioná X para finalizar.');

    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {

            case '1':
                alert('Te restan ' + cuotas + ' cuotas para finalizar tu prestamo');
                break;

            case '2':
                let precancelar = parseInt(prompt('Ingresa cantidad de cuotas a cancelar'));
                if (precancelar <= cuotas) {
                    cuotas -= precancelar;
                   
                    alert('La operación fue relizada exitosamente. Te restan ' + cuotas + ' cuotas para finalizar tu prestamo');
                } else {
                    alert('la cantidad de cuotas a precancelar supera la totalidad de cuotas totales');
                }
                break;

            case '3':
                let refinanciar = parseInt(prompt('Cuantas cuotas queres agregar a tu prestamo?'));
                cuotas += refinanciar;
                
                alert('La operación fue relizada exitosamente. Tu nuevo prestamo es de ' + cuotas + ' cuotas');
                break;

            default:
                alert('La opcion es incorrecta');
                break;

        }

        opcion = prompt('Qué queres realizar hoy?: \n1- Cuántas cuotas me quedan por pagar de mi prestamo? \n2 - Precancelar cuotas. \n3 - Refinanciar mi prestamo en mas cuotas. \nPresioná X para finalizar.');

    }

} else {
    
    alert('Por favor escribinos a nuestro chat de soporte para reestablecer la contraseña');

}

alert('Gracias por operar con PrestaBank!');