var listaAlunos = ["Manoel Gostavo", "Rodrigo Anão", "Marcia Peraci", "Diengo Julio", "Persival Sonza", "Marinia Medonça"];

function callAproved(arrAlunos) {

    var printFinal;

    var apr = "com situação de Aprovado na posição geral ";
    var le = "com situação de Lista de espera posição geral ";
    var rep = "com situação de Não foi desta vez na posição geral ";

    var i = 0;

    
    arrAlunos.forEach(name_ => {
        
        var strFinal;

        if(i <= 1)
            strFinal = apr;
        else if(i <= 3)
            strFinal = le;
        else
            strFinal = rep;

        console.log(`Aluno: ${name_} ${strFinal}${(i+1)}`);

        i++;
    });

}

callAproved(listaAlunos);
