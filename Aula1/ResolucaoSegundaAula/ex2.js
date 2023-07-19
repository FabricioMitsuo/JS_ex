//Exercício: Verificação de dia da semana
//Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia
//da semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
//2 representa terça-feira e assim por diante.

const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite um número de 1 a 7: '));
let dia;
switch (numero) {
    case 1:
        dia = 'segunda-feira';
        break;
    case 2:
        dia = 'terça-feira';
        break;
    case 3:
        dia = 'quarta-feira';
        break;
    case 4:
        dia = 'quinta-feira';
        break;
    case 5:
        dia = 'sexta-feira';
        break;
    case 6:
        dia = 'sábado';
        break;
    case 7:
        dia = 'domingo';
        break;
    default:
        console.log('Dígito inválido. Digite um número de 1 a 7.');
        break;
}
console.log('O número ' + numero + ' corresponde a ' + dia + '.');

