// var => o valor pode ser modificado a qualquer momento e em qualquer ponto do sistema (fora do escopo)
// const => o valor não pode ser alterado
// let => o valor pode ser modifcado a qualquer momento porem somente dentro do escopo

// = receber / atribuir valor

// == comparar se são iguais
// === campara se são estritamente iguais
// != compara se são diferentes
// 1 < 0  um é menor que zero 
// 1 > 0  um é maior que zero
// 1 <= 5  um é menor ou igual a cinco
// 1 >= 5 um é maior ou igual a cinco

// x <= 5 reprovado
// x > 5  aprovado   x >= 6


// Exemplo 1 
console.log("Hello World!")


// Exemplo 2
console.log("Exemplo 2")

let prompt = require('prompt-sync')()

let nome = prompt('Digite seu nome: ')

console.log('Olá ' + nome)


// Exemplo 3
// Verificar se o número digitado é igual à 5
// Mostrar o estritamente igual ===
console.log("Exemplo 3")

let numero = prompt('Digite um número:')

if (numero == 5) {
    console.log("O número é 5")
} else {
    console.log("ERROU!! O número " + numero + " não é o correto!")
}


// Exemplo 4
console.log("Exemplo 4")

let primeiraNota = parseFloat(prompt('Digite a primeira nota:'))
let segundaNota = parseFloat(prompt('Digite a segunda nota:'))

let media = (primeiraNota + segundaNota) / 2

if (media >= 6) {
    console.log("Meus parabéns!")
} else {
    console.log("Estude um pouco mais!")
}


// Exemplo 5
// Verificar se o número é par ou impar
console.log("Exemplo 5")

let numeroDigitado = parseInt(prompt('Digite um número para verificar se ele é par ou impar:'));

if (numeroDigitado % 2 == 0) {
    console.log("O número é par")
} else {
    console.log("O número é impar")
}


//Exemplo 6
// Mostrar tratamentos lowercase e tals
console.log("Exemplo 6")

let animal = prompt("Digite o nome do animal para saber o que ele tem à dizer: ");

switch (animal) {
  case 'cachorro':
    console.log("Au au");
    break;
  case 'gato':
    console.log("Miau");
    break;
  case 'vaca':
    console.log("Muuuu");
    break;
	case 'papagaio':
    console.log("Você foi a culpada desse amor se acabar...");
    console.log("https://youtu.be/wAs_kCFSiL0");
    break;
  default:
  	console.log("Não conheço este animal");
    break;
}