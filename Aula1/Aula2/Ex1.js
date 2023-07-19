7 //Calcular a soma dos números de 1 a 100 utilizando a estrutura
// //while.

// let contador = 1
// let soma = 0
// const prompt = require(`prompt-sync`)()

// while ( contador <=100 ) {
//     soma = soma + contador;
//     contador++
//     console.log(soma);
// } 

// 9Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

const prompt = require(`prompt-sync`)()
let numero = parseInt(prompt("Digite um numero: "))

while (numero > 0) {
    console.log(numero);
    numero --;
    
    
}
    


  

  