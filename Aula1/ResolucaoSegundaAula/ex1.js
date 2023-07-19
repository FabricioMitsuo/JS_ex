//Exercício: Verificação de login
//Escreva um programa que solicita ao usuário um nome de usuário e uma senha.
//Verifique se o nome de usuário é "admin" e a senha é "senha123".
//Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

const prompt = require('prompt-sync')();

const usuario = prompt('Digite o nome de usuário: ');
const senha = prompt('Digite a senha: ');

if (usuario == 'admin' && senha == 'senha123') {
    console.log('Login bem-sucedido!');
} else {
    console.log('Nome de usuário ou senha incorretos.');
}
