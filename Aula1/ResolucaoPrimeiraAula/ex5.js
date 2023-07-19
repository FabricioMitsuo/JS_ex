// 5. Faça um programa receba dois valores e imprima qual é o 
// maior número digitado

const prompt = require('prompt-sync')()
const valor1 = parseInt(prompt("Digite o primeiro valor:"))
const valor2 = parseInt(prompt("Digite o segundo valor:"))

if (valor1 > valor2) {
    console.log(valor1);
} else if (valor2 > valor1) {
    console.log(valor2);
} else {
    console.log("Os números são iguais"); // Números iguais
}