//Exercício: Verificação de números em ordem crescente
//Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente.
//Exiba uma mensagem indicando se os números estão em ordem crescente ou não



const prompt = require('prompt-sync')();

const numero1 = parseInt(prompt('Digite o primeiro número: '));
const numero2 = parseInt(prompt('Digite o segundo número: '));
const numero3 = parseInt(prompt('Digite o terceiro número: '));

if (numero1 < numero2 && numero2 < numero3) {
    console.log('Os números estão em ordem crescente.');
} else {
    console.log('Os números não estão em ordem crescente.');
}


// if (numero1 < numero2 && numero2 < numero3) {
//     console.log('Os números estão em ordem crescente.');
// } else if (numero3 < numero2 && numero2 < numero1) {
//     console.log('Os números estão em ordem decrescente.');
// }else{
//     console.log('Os números não estão em ordem.');
// }


