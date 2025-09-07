// Ejercicio 2
// Contador de caracteres en Node.js usando la terminal

const readline = require("readline");

// Creamos la interfaz para leer desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedimos al usuario que escriba un texto
rl.question("Escribe un texto: ", function(texto) {
  // Mostramos la cantidad de caracteres
  console.log("Cantidad de caracteres: " + texto.length);

  rl.close();
});