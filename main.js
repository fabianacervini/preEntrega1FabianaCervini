// función para obtener datos de nuestros clientes y darles la bienvenida

function obtenerDatosDeCliente(){
  alert("¡Hagamos juntos el cálculo de tus gastos del mes😎!")
  let nombreCliente = prompt("¡Hola!, ¿cuál es tu nombre?😏")
  alert("Hola " + nombreCliente + " hoy te ayudaremos a sumar y restar todos tus gastos✅")
  alert('No te olvides de usar "-" para cuando necesites restar😉')
  console.log(nombreCliente)
}

obtenerDatosDeCliente()

// función para almacenar el total de los gastos

let totalGastos = 0 
let seguirComprando = true

do {
let sumarGastos = parseFloat(prompt("Acá ve sumando tus compras💥 (ingresa 0 cuando hayas terminado🤙)"))

// finaliza el bucle si se ingresa 0
if (sumarGastos === 0) {
  break; 
}
// suma el monto de los gastos y realiza un total
totalGastos += sumarGastos; 
console.log(sumarGastos)
// función para mostrar botón aceptar / cancelar
seguirSumando = confirm('¿Quieres añadir más gastos?🕵️‍♂️')
} while (seguirSumando)

// alert para notificar el total de los gastos

alert("El total de tus gastos es🤸‍♂️: " + totalGastos)
console.log(totalGastos)



// sumar una varible que no deje si es letra 


