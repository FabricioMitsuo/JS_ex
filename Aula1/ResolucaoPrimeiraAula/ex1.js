// 1. Faça um programa que receba o nome, cargo e salário de um funcionário. Se o funcionário ganhar abaixo de 1000 reais, 
// calcule o salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário desse funcionário.

const prompt = require('prompt-sync')()
const salario = parseFloat(prompt('Digite o salário: '))

if (salario < 1000) {
    let novosalario = salario * 1.1;
    console.log(novosalario)
} else {
    console.log("Salário dentro da faixa")
}