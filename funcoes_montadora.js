import { question } from "readline-sync";
import {ulid} from "ulidx";
import {salvar_montadoras_no_arquivo_txt} from "./funcoes_salvar_no_arquivo.js"

export function cadastrar_montadoras(montadoras){
    console.log("\n\n>>>>>>>>>>>>>>>>>>> CADRASTRAR MONTADORAS <<<<<<<<<<<<<<<")
    let nome_montadora = question("Nome da montadora:")
    let pais_montadora = question("Pais: ")
    let data_fundacao = question("Data de fundação: ")
    
    montadoras.push({id: ulid(),nome:nome_montadora,pais:pais_montadora,data:data_fundacao})
    
    salvar_montadoras_no_arquivo_txt(montadoras)

}

export function listar_montadora(montadoras){
    console.log("\n\n>>>>>>>>>>>>>>>>>>>LISTAR MONTADORAS <<<<<<<<<<<<<<<")
    for (let i in montadoras){
        console.log("╔═══════════════════════════════════════════════════════════════════════════════════════════╗");
        console.log(`   ${Number(i)+1}.  ULID:${montadoras[i].id} NOME:${montadoras[i].nome}, PAIS:${montadoras[i].pais}, DATA_FUNDACAO:${montadoras[i].data}`)
        console.log("╚═══════════════════════════════════════════════════════════════════════════════════════════╝");
    }
    
}


export function atualizar_montadoras(montadoras){
    console.log("\n\n>>>>>>>>>>>>>>>>>>>ATUALIZAR MONTADORAS <<<<<<<<<<<<<<<")
    for (let i in montadoras){
        console.log("╔═══════════════════════════════════════════════════════════════════════════════════════════╗");
        console.log(`   ${Number(i)+1}.  ULID:${montadoras[i].id} NOME:${montadoras[i].nome}, PAIS:${montadoras[i].pais}, DATA_FUNDACAO:${montadoras[i].data}`)
        console.log("╚═══════════════════════════════════════════════════════════════════════════════════════════╝");
    }

    let nome= question("Digite o nome da montadora que deseja atualizar? ");
    let nome_existe_no_sistema=false
    let indice_montadora_procurada
    //verifica se ha montadoras com esse nome
    let indice_atual=0
    for (const montadora_atual of montadoras) {
        if(montadora_atual.nome==nome){
            nome_existe_no_sistema=true
            indice_montadora_procurada=indice_atual
        }
        indice_atual++
    }

    if(nome_existe_no_sistema){
        let novo_nome = question("Qual é o novo nome?")
        let novo_pais = question("Qual é o novo país?")
        montadoras[indice_montadora_procurada].nome = novo_nome || montadoras[indice_montadora_procurada].nome
        montadoras[indice_montadora_procurada].pais = novo_pais || montadoras[indice_montadora_procurada].pais
        salvar_montadoras_no_arquivo_txt(montadoras)
    }
    else{
       console.log("Nao ha uma montadora no sistema com esse nome! ")
    }

    }



export function remover_montadoras(montadoras){
        console.log("\n\n>>>>>>>>>>>>>>>>>>>REMOVER MONTADORAS <<<<<<<<<<<<<<<")
        for (let i in montadoras){
            console.log("╔═══════════════════════════════════════════════════════════════════════════════════════════╗");
            console.log(`   ${Number(i)+1}.  ULID:${montadoras[i].id} NOME:${montadoras[i].nome}, PAIS:${montadoras[i].pais}, DATA_FUNDACAO:${montadoras[i].data}`)
            console.log("╚═══════════════════════════════════════════════════════════════════════════════════════════╝");
        }

        let nome = question("Digite o nome da montadora que deseja excluir: ")

        let nome_existe_no_sistema=false
        let indice_montadora_procurada
        //verifica se ha montadoras com esse nome
        let indice_atual=0
        for (const montadora_atual of montadoras) {
            if(montadora_atual.nome==nome){
                nome_existe_no_sistema=true
                indice_montadora_procurada=indice_atual
            }
            indice_atual++
        }
    
        if(nome_existe_no_sistema){
            montadoras=montadoras.splice(nome, indice_montadora_procurada)
           salvar_montadoras_no_arquivo_txt(montadoras)
           console.log(`montadora ${nome} excluida com sucesso!!`)
        }
        else{
           console.log("Nao ha uma montadora no sistema com esse nome! ")
        } 
        
 }
    

export function filtrar_montadoras(montadoras){
    console.log("\n\n>>>>>>>>>>>>>>>>>>>FILTRAR MONTADORAS <<<<<<<<<<<<<<<")
    let filtro = Number(question('Filtro por qual critério (1-nascionalidade, 2-Ano)?:  '))
    if (filtro ==1){
        let nacionalidade = question('Filtre por qual país?')

        console.log("\n\n__________ Montadoras filtradas filtradaS_____________")
        for (let i in montadoras){
            if (montadoras[i].pais === nacionalidade){
                console.log("╔═══════════════════════════════════════════════════════════════════════════════════════════╗");
                console.log(`   ${Number(i)+1}.  ULID:${montadoras[i].id} NOME:${montadoras[i].nome}, PAIS:${montadoras[i].pais}, DATA_FUNDACAO:${montadoras[i].data}`)
                console.log("╚═══════════════════════════════════════════════════════════════════════════════════════════╝");
            }
        }
    }
    else if (filtro ==2){
        let ano = question('Filtre por qual ano?')
        for (let indice_atual in montadoras){
            if (montadoras[indice_atual].data == ano){
                console.log("╔═══════════════════════════════════════════════════════════════════════════════════════════╗");
                console.log(`   ${Number(i)+1}.  ULID:${montadoras[i].id} NOME:${montadoras[i].nome}, PAIS:${montadoras[i].pais}, DATA_FUNDACAO:${montadoras[i].data}`)
                console.log("╚═══════════════════════════════════════════════════════════════════════════════════════════╝");
            }
        }
    }
    
    else {
        console.log('Opção inválida!')
    }
}