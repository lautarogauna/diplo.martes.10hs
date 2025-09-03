const numeros = [45, 95, 5, 105, 25, 66];
let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i]; 
  }
}

console.log(`El número mayor del array es: ${mayor}`);