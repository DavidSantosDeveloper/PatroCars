import { question } from "readline-sync";
import {ulid} from "ulidx";
import {salvar_carros_no_arquivo_txt} from "./funcoes_salvar_no_arquivo.js"


export function cadastrar_carro(carros,montadoras){
    console.log("\n\n>>>>>>>>>>>>>>>>>>>CADRASTRAR CARROS <<<<<<<<<<<<<<<")
    
    let marca = question("Marca do carro: ")
    mostrar_lista_de_veiculos_da_montadora(marca,montadoras)
    let modelo_carro = question("modelo do carro: ")
    let ano = Number(question("Ano do modelo do carro: "))
    let ano_de_fabricacao=Number(question("Ano de fabricacao do carro: "))
    let cor = question("cor  do carro: ")
    let valor = Number(question("valor do carro: "))
    let placa = question("numero da placa: ")

    carros.push({ id: ulid(), Modelo: modelo_carro, Marca: marca, Ano: ano,AnoFabricacao:ano_de_fabricacao,Cor:cor,Valor:valor,Placa:placa,Vendido:false})
    salvar_carros_no_arquivo_txt(carros)
}


export function listar_cars(carros){
        console.log("\n\n>>>>>>>>>>>>>>>>>>> LISTAR CARROS CADRASTRADOS<<<<<<<<<<<<<<<")
        for (let i in carros){  
            console.log("╔═════════════════════════════════════════════════════════════════════════╗");
            console.log(`${Number(i)+1}. ID:${carros[i].id}, MODELO:${carros[i].Modelo},MARCA:${carros[i].Marca}, ANO:${carros[i].Ano},ANO_DE_FABRICACAO:${carros[i].AnoFabricacao},COR:${carros[i].Cor},VALOR:${carros[i].Valor},PLACA:${carros[i].Placa},VENDIDO:${(carros[i].Vendido)==true? "SIM":"NAO"}`)
            console.log("╚═════════════════════════════════════════════════════════════════════════╝");
        }
}

export function atualizar_carro(carros){
    console.log("\n\n>>>>>>>>>>>>>>>>>>> ATUALIZAR CARROS<<<<<<<<<<<<<<<")
    console.log("__________________carros cadrastrados____________")
    for (let i in carros){  
        console.log("╔═════════════════════════════════════════════════════════════════════════╗");
        console.log(`${Number(i)+1}. ID:${carros[i].id}, MODELO:${carros[i].Modelo},MARCA:${carros[i].Marca}, ANO:${carros[i].Ano},ANO_DE_FABRICACAO:${carros[i].AnoFabricacao},COR:${carros[i].Cor},VALOR:${carros[i].Valor},PLACA:${carros[i].Placa},VENDIDO:${(carros[i].Vendido)==true? "SIM":"NAO"}`)
        console.log("╚═════════════════════════════════════════════════════════════════════════╝");
    }

    let modelo = question("Digite o modelo do carro: ")
    let indice_carro_procurado
   let modelo_existe_no_sistema=false
    //verifica se ha montadoras com esse nome
    let indice_atual=0
    for (const carro_atual of carros) {
        if(carro_atual.Modelo==modelo){
            modelo_existe_no_sistema=true
            indice_carro_procurado=indice_atual
        }
        indice_atual++
    }

    if(modelo_existe_no_sistema){
        let novo_modelo = question("O novo modelo é: ")
         let nova_marca = question("A nova marca é: ")
         let novo_ano = Number(question("O novo ano de lancamento é: "))
         let novo_ano_de_fabricacao = Number(question("O novo ano de fabricacao é: "))
         let novo_cor = question("O nova cor é: ")
         let novo_valor = Number(question("O nova valor é: "))
         let novo_placa = question("O nova placa é: ")

         carros[indice_carro_procurado].Modelo = novo_modelo || carros[indice_carro_procurado].Modelo
         carros[indice_carro_procurado].Marca = nova_marca ||  carros[indice_carro_procurado].Marca
         carros[indice_carro_procurado].Ano = novo_ano   || carros[indice_carro_procurado].Ano 
         carros[indice_carro_procurado].AnoFabricacao = novo_ano_de_fabricacao   ||  carros[indice_carro_procurado].AnoFabricacao 
         carros[indice_carro_procurado].Cor = novo_cor   || carros[indice_carro_procurado].Cor
         carros[indice_carro_procurado].Valor = novo_valor   || carros[indice_carro_procurado].Valor
         carros[indice_carro_procurado].Placa = novo_placa   || carros[indice_carro_procurado].Placa
         salvar_carros_no_arquivo_txt(carros)
    }
    else{
       console.log("Nao ha um carro no sistema com esse nome! ")
    } 

 }

 export function remover_carro(carros){
    console.log("\n\n>>>>>>>>>>>>>>>>>>> REMOVER CARROS<<<<<<<<<<<<<<<\n")
    console.log("__________________carros cadrastrados____________")
    for (let i in carros){  
        console.log("╔═════════════════════════════════════════════════════════════════════════╗");
            console.log(`${Number(i)+1}. ID:${carros[i].id}, MODELO:${carros[i].Modelo},MARCA:${carros[i].Marca}, ANO:${carros[i].Ano},ANO_DE_FABRICACAO:${carros[i].AnoFabricacao},COR:${carros[i].Cor},VALOR:${carros[i].Valor},PLACA:${carros[i].Placa},VENDIDO:${(carros[i].Vendido)==true? "SIM":"NAO"}`)
            console.log("╚═════════════════════════════════════════════════════════════════════════╝");;
    }
   let modelo = question("Digite o nome do modelo do carro que deseja excluir: ")

    let indice_carro_procurado
    let modelo_existe_no_sistema=false
     //verifica se ha modelos de carros com esse nome
     let indice_atual=0
     for (const carro_atual of carros) {
         if(carro_atual.Modelo==modelo){
             modelo_existe_no_sistema=true
             indice_carro_procurado=indice_atual
         }
         indice_atual++
     }
 
     if(modelo_existe_no_sistema){
        carros=carros.splice(modelo, indice_carro_procurado)
        console.log(`  >>>>>carro do modelo ${modelo} excluido com sucesso!!`)
        salvar_carros_no_arquivo_txt(carros)

     }
     else{
        console.log("Nao ha um modelo de carro no sistema com esse nome! ")
     } 
 
       
}

export function filtrar_carros(carros){
    let filtro = question('Filtro por qual critério? (1-ano 2-marca): ')

    console.log("\n>>>>>>>>>>>>>>>>>>>FILTRAR CARROS<<<<<<<<<<<<<<<")

    console.log("\n________________Carros Filtrados__________________")
    if (filtro ==1){
           let ano = question('Filtre por qual ano?')
           for (let i in carros){
           if (carros[i].Ano === ano){
            console.log("╔═════════════════════════════════════════════════════════════════════════╗");
            console.log(`${Number(i)+1}. ID:${carros[i].id}, MODELO:${carros[i].Modelo},MARCA:${carros[i].Marca}, ANO:${carros[i].Ano},ANO_DE_FABRICACAO:${carros[i].AnoFabricacao},COR:${carros[i].Cor},VALOR:${carros[i].Valor},PLACA:${carros[i].Placa},VENDIDO:${(carros[i].Vendido)==true? "SIM":"NAO"}`)
            console.log("╚═════════════════════════════════════════════════════════════════════════╝");
    }}
    } 
    else if (filtro ==2){
        let marca = question('Qual a marca?')
        for (let i in carros){
           if (carros[i].Marca === marca){
                    console.log("╔═════════════════════════════════════════════════════════════════════════╗");
                    console.log(`${Number(i)+1}. ID:${carros[i].id}, MODELO:${carros[i].Modelo},MARCA:${carros[i].Marca}, ANO:${carros[i].Ano}`)
                    console.log("╚═════════════════════════════════════════════════════════════════════════╝");
            }
         }
     }
    else {
        console.log('Opção Inválida!')
    }
}


function mostrar_lista_de_veiculos_da_montadora(nome_da_montadora,lista_de_montadoras){
    let i=0
    console.log("____________modelos cadrastrados_________")
    for (const veiculo_atual of lista_de_montadoras) {
       if(veiculo_atual.nome==nome_da_montadora){
        console.log("╔═════════════════════════════════════════════════════════════════════════╗");
        console.log(`${Number(i)+1}. ID:${carros[i].id}, MODELO:${carros[i].Modelo},MARCA:${carros[i].Marca}, ANO:${carros[i].Ano},ANO_DE_FABRICACAO:${carros[i].AnoFabricacao},COR:${carros[i].Cor}, VALOR:${carros[i].Valor},PLACA:${carros[i].Placa},VENDIDO:${(carros[i].Vendido)==true? "SIM":"NAO"}`)
        console.log("╚═════════════════════════════════════════════════════════════════════════╝");
  
       } 
       i++
    }
    
}

