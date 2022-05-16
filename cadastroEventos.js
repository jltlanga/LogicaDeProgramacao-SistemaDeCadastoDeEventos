const entrada = require('readline-sync');

let dataDoEvento = new Date('2022-05-18 00:00:00');
const dataAtual = new Date();

if (dataDoEvento <= dataAtual) {
 
    console.log('Data Inválida, Cadastro não será permitido');
    console.log('Informe uma data Válida');
} else{
    console.log('Evento permitido');
    let idadeParticipante = parseInt(entrada.question('Informe a idade do participante: '));
    if(idadeParticipante < 18){
        console.log('Cadastro não permitido pela idade');

    }else{
        let qntdDeParticipantes = parseInt(entrada.question('Informe a número de participantes: '));
        if(qntdDeParticipantes > 4){
            console.log('Cadastro não permitido, limite excedito');
           
        }else{
              let nomePalestrante = entrada.question('Informe o nome do palestrante: ');

              let lista =[];

              for(let i =0; i <= qntdDeParticipantes; i++){
                let nomeParticipante = entrada.question('Informe o nome do participante: ');
                   
                console.log('Palestrante: ' + nomePalestrante + ' Participantes: ' + lista.push(lista[nomeParticipante]));
    
                }
                
        }
            
            


    }
       

}

  

