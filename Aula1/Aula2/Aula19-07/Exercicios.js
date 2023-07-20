 
 export function verificarMaiorIdade(){


    let pessoa = {
        nome: "";
        idade: 0
    }

    let idade;
    console.log("sua idade deve ser maior que 18, ");

    do{
        pessoa.idade = parseInt(prompt("Digite  sua idade: "));
        pessoa.nome = prompt("Digite seu nome: ");

    } while (pessoa.idade < 18);
    console.log("idade valida");
    console.log("objeto": pessoa);
    

    {
        console.log("idade valida: ");
        
    }







}