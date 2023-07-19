// 2. Uma empresa decide dar aumento de 30% aos funcionários cujo salário é inferior a 500 reais. Escreva um programa que 
// receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não 
// tenha direito a aumento.

const prompt = require('prompt-sync')()
let salario = parseFloat(prompt('Digite outro salário: '))

if (salario < 500) {
    salario *= 1.3; // igual a: salario = salario * 1.3
    console.log(salario);
} else {
    console.log("Não tem direito a aumento"); // Funcionário não tem direito a aumento
}
