// 4. Faça um programa que receba um número do usuário e 
// informe se este número é par ou ímpar.

const prompt = require('prompt-sync')()
const outroNumero = parseInt(prompt("Digite um número, para verificar se é par ou impar:"))

if (outroNumero % 2 === 0) {
    console.log("par");
} else {
    console.log("ímpar");
}