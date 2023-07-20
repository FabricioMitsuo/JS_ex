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
}

