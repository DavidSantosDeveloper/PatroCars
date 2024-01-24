import { question } from "readline-sync";
import {ulid} from "ulidx";
import fs from "fs"

const montadoras = []
const carros = []
const anos = []
const paises = []

function main(){
    ler_arquivo_montadoras_txt(montadoras)
    ler_arquivo_carros_txt(carros)

    let opcao = Number(question(menu()))

    while (opcao != 0){

        if (opcao === 1){  
            cadastrar_montadoras(montadoras)
        }else if (opcao === 2){
            listar_montadora(montadoras)
        }else if (opcao === 3){
            atualizar_montadoras(montadoras)
        }else if (opcao === 4){
            remover_montadoras(montadoras)
        }else if (opcao === 5){
            filtrar_montadoras(montadoras)
        }else if (opcao === 6){
            cadastrar_carro()
        }else if (opcao === 7){
            listar_cars(carros)
        }else if (opcao === 8){
            atualizar_carro(carros)
        }else if (opcao === 9){
            remover_carro(carros)
        }else if (opcao === 10){
            filtrar_carros(carros)
        }
       else if (opcao === 11){
            vender_carro(carros)
       }
       else{
            console.log("Opção Inválida")
        }

          opcao = Number(question(menu()))
        }
        
    }    



function menu(){
    console.log("\n ")
    const opcoes =
     `|------ Bem vindo ao sistema de cadastro! ------ |
             Menu:
             1.  Cadastrar montadora
             2.  Listar Montadoras
             3.  Atualizar Montadoras
             4.  Remover Montadora
             5.  Filtrar Montadoras
             6.  Cadastrar carro
             7.  Listar carros
             8.  Atualizar carro
             9. Remover carro
            10. Filtrar carros
            11. Vender carros
             opcao (0 - Sair)>> `

             return opcoes

}

function cadastrar_montadoras(montadoras){
    console.log("\n\n>>>>>>>>>>>>>>>>>>> CADRASTRAR MONTADORAS <<<<<<<<<<<<<<<")
    let nome_montadora = question("Nome da montadora:")
    let pais_montadora = question("Pais: ")
    let data_fundacao = question("Data de fundação: ")
    
    montadoras.push({id: ulid(),nome:nome_montadora,pais:pais_montadora,data:data_fundacao})
    
    salvar_montadoras_no_arquivo_txt(montadoras)

}

function listar_montadora(montadoras){
    console.log("\n\n>>>>>>>>>>>>>>>>>>>LISTAR MONTADORAS <<<<<<<<<<<<<<<")
    for (let i in montadoras){
        console.log("╔═══════════════════════════════════════════════════════════════════════════════════════════╗");
        console.log(`   ${Number(i)+1}.  ULID:${montadoras[i].id} NOME:${montadoras[i].nome}, PAIS:${montadoras[i].pais}, DATA_FUNDACAO:${montadoras[i].data}`)
        console.log("╚═══════════════════════════════════════════════════════════════════════════════════════════╝");
    }
    
}


function atualizar_montadoras(montadoras){
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



function remover_montadoras(montadoras){
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
    

function filtrar_montadoras(montadoras){
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

function cadastrar_carro(){
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


function listar_cars(carros){
        console.log("\n\n>>>>>>>>>>>>>>>>>>> LISTAR CARROS CADRASTRADOS<<<<<<<<<<<<<<<")
        for (let i in carros){  
            console.log("╔═════════════════════════════════════════════════════════════════════════╗");
            console.log(`${Number(i)+1}. ID:${carros[i].id}, MODELO:${carros[i].Modelo},MARCA:${carros[i].Marca}, ANO:${carros[i].Ano},ANO_DE_FABRICACAO:${carros[i].AnoFabricacao},COR:${carros[i].Cor},VALOR:${carros[i].Valor},PLACA:${carros[i].Placa},VENDIDO:${(carros[i].Vendido)==true? "SIM":"NAO"}`)
            console.log("╚═════════════════════════════════════════════════════════════════════════╝");
        }
}

function atualizar_carro(carros){
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
function remover_carro(carros){
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

function filtrar_carros(carros){
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

                                                       
function salvar_montadoras_no_arquivo_txt(montadoras){
    console.log("#Iniciando a gravação de montadoras em arquivo montadora.txt.")
		let stringMontadoras = "";
		let linha = "";

		for (let montadora_atual of montadoras) {
			
			linha = `${montadora_atual.id}#${montadora_atual.nome}#${montadora_atual.pais}#${montadora_atual.data}\r\n`;
            
			stringMontadoras += linha;
		}
		
		stringMontadoras = stringMontadoras.slice(0,stringMontadoras.length-2);

		fs.writeFileSync("./montadoras.txt", stringMontadoras,'utf-8');
		console.log("montadoras  salvas em arquivo.")
}


function ler_arquivo_montadoras_txt(montadoras){
    console.log("\n#Iniciando leitura de arquivo  montadora.txt");
    const arquivo = fs.readFileSync("./montadoras.txt", 'utf-8');
    const linhas= arquivo.split('\r\n');
    if(arquivo==""){
        console.log("nao ha montadoras salvas!")
    }
    else{
        let lista_de_montadoras=[]
        for (let i = 0; i < linhas.length; i++) {
            let linhaMontadora = linhas[i].split("#");
            
        
            let montadora_atual ={id: linhaMontadora[0],nome:linhaMontadora[1],pais:linhaMontadora[2],data:linhaMontadora[3]}
            montadoras.push(montadora_atual)
            console.log(`-> montadora ${montadora_atual.nome} carregada`);       
        }
    }

}          




function salvar_carros_no_arquivo_txt(carros){
    console.log("\n #Iniciando a gravação de carros em arquivo carros.txt")
		let stringCarros = "";
		let linha = "";
        console.log("\n")
		for (let carro_atual of carros) {
           
			linha = `${carro_atual.id}#${carro_atual.Modelo}#${carro_atual.Marca}#${carro_atual.Ano}#${carro_atual.AnoFabricacao}#${carro_atual.Cor}#${carro_atual.Valor}#${carro_atual.Placa}#${carro_atual.Vendido}\r\n`;
			stringCarros += linha;
		}
		
		stringCarros = stringCarros.slice(0,stringCarros.length-2);

		fs.writeFileSync("./carros.txt", stringCarros,'utf-8');
		console.log("-> carros  salvos em arquivo.")
}

function ler_arquivo_carros_txt(carros){
    console.log("\n #Iniciando leitura de arquivo carros.txt");
    const arquivo = fs.readFileSync("./carros.txt", 'utf-8');
    const linhas= arquivo.split('\r\n');
    if(arquivo==""){
        console.log("nao ha carros salvos!")
    }
    else{
        let lista_de_carros=[]
        console.log("\n")
        for (let i = 0; i < linhas.length; i++) {
            let linhaCarro = linhas[i].split("#");
            
            let carro_atual ={id: linhaCarro[0],Modelo:linhaCarro[1],Marca:linhaCarro[2],Ano:Number(linhaCarro[3]),AnoFabricacao:Number(linhaCarro[4]),Cor:linhaCarro[5],Valor:Number(linhaCarro[6]),Placa:Number(linhaCarro[7]),Vendido:linhaCarro[8]=="false"?false:true}
            carros.push(carro_atual)
            console.log(`-> carro ${carro_atual.Modelo} carregado!`);       
        }
    }

} 


function mostrar_lista_de_veiculos_da_montadora(nome_da_montadora,lista_de_veiculos){
    let i=0
    console.log("____________modelos cadrastrados_________")
    for (const veiculo_atual of lista_de_veiculos) {
       if(veiculo_atual.nome==nome_da_montadora){
        console.log("╔═════════════════════════════════════════════════════════════════════════╗");
        console.log(`${Number(i)+1}. ID:${carros[i].id}, MODELO:${carros[i].Modelo},MARCA:${carros[i].Marca}, ANO:${carros[i].Ano},ANO_DE_FABRICACAO:${carros[i].AnoFabricacao},COR:${carros[i].Cor}, VALOR:${carros[i].Valor},VALOR:${carros[i].Valor},PLACA:${carros[i].Placa},VENDIDO:${(carros[i].Vendido)==true? "SIM":"NAO"}`)
        console.log("╚═════════════════════════════════════════════════════════════════════════╝");
  
       } 
       i++
    }
    
}


function procurar_veiculos(carros){
    let lista_de_veiculos=[]
    let opcao=Number (question("Procurar veiculo (1-montadora,2-modelo,3-placa):"))
    if(opcao==1){
       let montadora=question("Nome da montadora:")
       for (const carro_atual of carros) {
           if(carro_atual.Marca==montadora){
                lista_de_veiculos.push(carro_atual)
           }
       }

    }
    else if(opcao==2){
        let modelo=question("Nome do modelo:")
        for (const carro_atual of carros) {
            if(carro_atual.Modelo==modelo){
                 lista_de_veiculos.push(carro_atual)
            }
        }
 
     }else if(opcao==3){
        let placa=question("placa:")
        for (const carro_atual of carros) {
            if(carro_atual.Placa==placa){
                 lista_de_veiculos.push(carro_atual)
            }
        }
 
     }
     else{
        console.log("Opcao invalida!")
     }

     return lista_de_veiculos
}



function vender_carro(lista_de_veiculos){
    let veiculos=procurar_veiculos(lista_de_veiculos)
    console.log("____________modelos encontrados_________")
    for (let i in veiculos){  
        console.log("╔═════════════════════════════════════════════════════════════════════════╗");
        console.log(`${Number(i)+1}. ID:${carros[i].id}, MODELO:${carros[i].Modelo},MARCA:${carros[i].Marca}, ANO:${carros[i].Ano},ANO_DE_FABRICACAO:${carros[i].AnoFabricacao},COR:${carros[i].Cor},VALOR:${carros[i].Valor},PLACA:${carros[i].Placa},VENDIDO:${(carros[i].Vendido)==true? "SIM":"NAO"}`)
        console.log("╚═════════════════════════════════════════════════════════════════════════╝");
    }
    if(veiculos.length>0){
        let placa=question("placa do veiculo:")
        let veiculo_encontrado=false
        for (const veiculo_atual of lista_de_veiculos) {
            if(veiculo_atual.Placa==placa){
                veiculo_atual.Vendido=true;
                veiculo_encontrado=true
            }
        }
        if(veiculo_encontrado){
              console.log("Venda concluida!")
              salvar_carros_no_arquivo_txt(lista_de_veiculos)
        }
    }   
    else{
        console.log("Nao ha veiculos com os dados informados!!!")
    }

}


export function verificar_se_contem_substring(texto = '', substring_do_texto) {
    let resultado_substring_esta_no_texto = false
    let numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
        for (const indice_caractere_atual in texto) {
            if (texto[indice_caractere_atual] == substring_do_texto[0]) {
            
                for (let indice_atual = 0; indice_atual < substring_do_texto.length; indice_atual++) {
                    if (texto[Number(indice_caractere_atual) + Number(indice_atual)] == substring_do_texto[indice_atual]) {
                        numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++
                    }
                }
                if (numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto == substring_do_texto.length) {
                    resultado_substring_esta_no_texto = true
                    return resultado_substring_esta_no_texto
                } else {
                    numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                }
            }
        }
    

    return resultado_substring_esta_no_texto
}

function filtrar_veiculos(carros){
    let lista_de_veiculos=[]
    let opcao=question("Filtrar por (1-nome modelo ou parte dele,2-Ano de fabricacao,3-Ano do modelo,4-Valor,5-parte do nome marca,6-vendido ):")
    if(opcao==1){
         let modelo=question("Nome do modelo ou parte dele:")
        for (const carro_atual of carros) {
            if(verificar_se_contem_substring(carro_atual.Modelo,modelo)){
                   lista_de_veiculos.push(carro_atual)
            }
        }
    }
    else if(opcao==2){
        let ano_inicial=Number(question("A partir de que ano:"))
        let ano_final=Number(question("Até que ano:"))
       for (const carro_atual of carros) {
           if(carro_atual.AnoFabricacao>=ano_inicial && carro_atual.AnoFabricacao<=ano_final){
                  lista_de_veiculos.push(carro_atual)
           }
       }
   }
   else if(opcao==3){
    let ano_inicial=Number(question("A partir de que ano:"))
    let ano_final=Number(question("Até que ano:"))
   for (const carro_atual of carros) {
       if(carro_atual.Ano>=ano_inicial && carro_atual.Ano<=ano_final){
              lista_de_veiculos.push(carro_atual)
       }
   }
  }
  else if(opcao==4){
    let valor_inicial=Number(question("A partir de valor:"))
    let valor_final=Number(question("Até que valor:"))
   for (const carro_atual of carros) {
       if(carro_atual.Valor>=valor_inicial && carro_atual.Valor<=valor_final){
              lista_de_veiculos.push(carro_atual)
       }
   }
  }

  else if(opcao==5){
    let marca=question("Nome do marca ou parte dele:")
   for (const carro_atual of carros) {
       if(verificar_se_contem_substring(carro_atual.Marca,marca)){
              lista_de_veiculos.push(carro_atual)
       }
   }
}
else if(opcao==6){
   for (const carro_atual of carros) {
       if(carro_atual.Vendido==true){
              lista_de_veiculos.push(carro_atual)
       }
   }
}

else{
    console.log("opcao invalida!!!!")
}

   return lista_de_veiculos
}

function ordenar_veiculos(lista_de_veiculos){
    let opcao=Number(question("Deseja ordenar por (1-Nome do modelo,2-ano,3-valor): "))
    let modo=Number(question("Modo (1-Crescente,2-Decrecente): "))
    if(opcao==1){
         if(modo==1){
               ordenarModelosCrescente(lista_de_veiculos)
         }
         else if(modo==2){
            ordenarModelosDecrescente(lista_de_veiculos)
        }
        else{
            console.log("modo de ordenacao invalido!")
        }
    }
    else if(opcao==2){
        if(modo==1){
              ordenarAnosCrescente(lista_de_veiculos)
        }
        else if(modo==2){
           ordenarAnosDecrescente(lista_de_veiculos)
       }
       else{
           console.log("modo de ordenacao invalido!")
       }
   }
   else if(opcao==3){
    if(modo==1){
          ordenarValorCrescente(lista_de_veiculos)
    }
    else if(modo==2){
       ordenarValorDecrescente(lista_de_veiculos)
   }
   else{
       console.log("modo de ordenacao invalido!")
   }
}
}
function exibir_veiculos(carros){
    console.log(">>>>>>>>>>>>>>>>>>>>EXIBIR VEICULOS<<<<<<<<<<<<<<<<<<")
    let lista_de_veiculos=[...carros]
   let opcao=Number(question("escolha uma opcao(1-Todos,2-Filtrar,3-Ordenar):"))
   if(opcao==1){
        listar_cars(lista_de_veiculos)
   }
   else if(opcao==2){
        filtrar_veiculos(lista_de_veiculos)
   }
   else if(opcao==3){
        ordenar_veiculos(lista_de_veiculos)
   }
   else{
    console.log("Opcao invalida!!!!")
   }
}





// Função para ordenar números em ordem crescente
function ordenarModelosCrescente(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j].Modelo > array[j + 1].Modelo) {
          // Trocar os elementos se estiverem fora de ordem
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
  
  // Função para ordenar números em ordem decrescente
  function ordenarModelosDecrescente(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j].Modelo < array[j + 1].Modelo) {
          // Trocar os elementos se estiverem fora de ordem
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }


function ordenarAnosCrescente(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j].Ano > array[j + 1].Ano) {
          // Trocar os elementos se estiverem fora de ordem
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
  
  function ordenarAnosDecrescente(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j].Ano < array[j + 1].Ano) {
          // Trocar os elementos se estiverem fora de ordem
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }

  function ordenarValorCrescente(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j].Valor > array[j + 1].Valor) {
          // Trocar os elementos se estiverem fora de ordem
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
  
  function ordenarValorDecrescente(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j].Valor < array[j + 1].Valor) {
          // Trocar os elementos se estiverem fora de ordem
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
    

main()