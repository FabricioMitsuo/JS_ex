// 6. Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de 
// APROVADO para média superior ou igual a 7, 0 RECUPERAÇÃO para notas entre 5.0 e 7, 0 ou a mensagem de 
// REPROVADO para média inferior a 5, 0.

const prompt = require('prompt-sync')()
const media = parseFloat(prompt("Digite a média do aluno:"))

if (media >= 7.0) {
    console.log("APROVADO");
} else if (media >= 5.0) {
    console.log("RECUPERAÇÃO");
} else {
    console.log("REPROVADO");
}