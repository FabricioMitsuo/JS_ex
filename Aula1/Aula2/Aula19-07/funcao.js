// function imprimirUmAAteDez(){
//     console.log(nome);
//     // codigo do exercicio
// }

// // chamar a funcao imprimir..
// imprimirUmAAteDez

// Fazer um menu de exercícios utilizando exemplos dado em aula (6 exercícios dentro de funções, e 
// incluir nome ou algo de sua preferência para criar um objeto e manipulá-lo)

1)// import PromptSync from "prompt-sync";

// const prompt = PromptSync();

// let nome;
// let endereco;

// do {
//     usuario = parseInt(prompt("Digite um numero que represente um exercicio de 1 á 3: "));

//     switch (usuario) {

//         case 1:
//         case 2:
//             // objeto
//             let objeto = {
//                 marca: "chevrolet",
//                 modelo: gol,
//                 cores: ["amarelo", "lilas", "roxo", "azul-escuro"]
//             }
//             //acessando objeto pela propriedade
//             console.log(objeto.marca, objeto.modelo, objeto.cores);
//             //exibindo o objeto inteiro
//             console.log("objeto marca", marca);
//             //chamando funcao hello world()//
//             helloworld("hello world");

//             break;

//         default:
//             console.log("Digite um numero de 1 á 4");
//             break;

//     }
//     continuar = prompt("Deseja continuar ver outros exercicios? Digite sim e Digite para No: ").toLocaleLowerCase()

// } while (continuar === "s");

// function helloworld(frase) {
//     console.log(frase);
// }

// 2) import PromptSync from "prompt-sync";

// const prompt = PromptSync();

// let nome;
// let aluno;

// do {
//     aluno = parseInt(prompt("Digite um numero que represente um exercicio de 1 á 3: "));

//     switch (aluno) {

//         case 1:
//         case 2:
//             // objeto
//             let aluno = {
//                 nome: "Luciana",
//                 idade: 35,
//                 altura: ["1.80", "2", "1.50", "1.85"]
//             }
//             //acessando objeto pela propriedade
//             console.log(aluno.nome, aluno.idade, aluno.altura);
//             //exibindo o objeto inteiro
//             console.log("objeto aluno", nome);
//             //chamando funcao hello world()//
//             helloworld("hello world");

//             break;

//         default:
//             console.log("Digite um numero de 1 á 3");
//             break;

//     }
//     continuar = prompt("Deseja continuar ver outros exercicios? Digite sim e Digite para No: ").toLocaleLowerCase()

// } while (continuar === "s");

// function helloworld(frase) {
//     console.log(frase);
// }

// import PromptSync from "prompt-sync";

// const prompt = PromptSync();

// let supermercado;
// let compras;

// do {
//     usuario = parseInt(prompt("Digite um numero que indique o exercicio de 1 á 4: "));

//     switch (compras) {

//         case 1:
//         case 2:
//             // objeto
//             let compras = {
//                 item: "sabonete"
//                 marca: "Palmmolive",
//                 peso: 500g,
//                 cores: ["amarelo", "lilas", "roxo", "azul-escuro"]
//             }
//             //acessando objeto pela propriedade
//             console.log(objeto.marca, objeto.peso, objeto.cores);
//             //exibindo o objeto inteiro
//             console.log("objeto peso", cores);
//             //chamando funcao hello world()//
//             helloworld("hello world");

//             break;

//         default:
//             console.log("Digite um numero de 1 á 3");
//             break;

//     }
//     continuar = prompt("Deseja continuar ver outros exercicios? Digite sim e Digite para No: ").toLocaleLowerCase()

// } while (continuar === "n or s");

// function helloworld(frase) {
//     console.log(frase);
// }


import PromptSync from "prompt-sync";

const prompt = PromptSync();

//menu para escolher qual exercicio o usuario escolher//

let exercicio;
let continuar;

do {
    exercicio =parseInt(prompt("Digite um numero que represente um exercicio de 1 á 4: "));

    switch (exercicio) {

             case 1:
             case 2:
                // objeto
                let aluno = {
                    nome: "Bebezinha",
                    idade: 19,
                    hardSkills: ["figma", "HTML", "CSS", "Web Responsive"]
                }
                //acessando objeto pela propriedade
                console.log(aluno.nome, aluno.idade, aluno.hardSkills);
                //exibindo o objeto inteiro
                console.log("objeto aluno",aluno);
            //chamando funcao hello world()//
            helloworld("hello world");
            
            break;
    
        default:
            console.log("Digite um numero de 1 á 4");
            break;
          
    }
    continuar = prompt("Deseja continuar ver outros exercicios? Digite sim e Digite para No: ") .toLocaleLowerCase() 
    
} while (continuar=== "s");

function helloworld(frase){
    console.log(frase);
    
