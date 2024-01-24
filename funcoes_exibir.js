import { question } from "readline-sync";
import { listar_cars } from "./funcoes_carro.js";


export function exibir_veiculos(carros){
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





function filtrar_veiculos(lista_de_veiculos){
    let carros=[]
    let opcao=question("Filtrar por (1-nome modelo ou parte dele,2-Ano de fabricacao,3-Ano do modelo,4-Valor,5-parte do nome marca,6-vendido ):")
    if(opcao==1){
         let modelo=question("Nome do modelo ou parte dele:")
        for (const carro_atual of lista_de_veiculos) {
            if(verificar_se_contem_substring(carro_atual.Modelo,modelo,true)){
                   carros.push(carro_atual)
            }
        }
    }
    else if(opcao==2){
        let ano_inicial=Number(question("A partir de que ano:"))
        let ano_final=Number(question("Até que ano:"))
       for (const carro_atual of lista_de_veiculos) {
           if(carro_atual.AnoFabricacao>=ano_inicial && carro_atual.AnoFabricacao<=ano_final){
                  carros.push(carro_atual)
           }
       }
   }
   else if(opcao==3){
    let ano_inicial=Number(question("A partir de que ano:"))
    let ano_final=Number(question("Até que ano:"))
   for (const carro_atual of lista_de_veiculos) {
       if(carro_atual.Ano>=ano_inicial && carro_atual.Ano<=ano_final){
              carros.push(carro_atual)
       }
   }
  }
  else if(opcao==4){
    let valor_inicial=Number(question("A partir de valor:"))
    let valor_final=Number(question("Até que valor:"))
   for (const carro_atual of lista_de_veiculos) {
       if(carro_atual.Valor>=valor_inicial && carro_atual.Valor<=valor_final){
              carros.push(carro_atual)
       }
   }
  }

  else if(opcao==5){
    let marca=question("Nome do marca ou parte dele:")
   for (const carro_atual of lista_de_veiculos) {
       if(verificar_se_contem_substring(carro_atual.Marca,marca,true)){
          carros.push(carro_atual)
       }
   }
}
else if(opcao==6){
   for (const carro_atual of carros) {
       if(carro_atual.Vendido==true){
              carros.push(carro_atual)
       }
   }
}

else{
    console.log("opcao invalida!!!!")
}

  console.log("_______________Carros filtrados_________________")
  for (let i in carros){  
    console.log("╔═════════════════════════════════════════════════════════════════════════╗");
    console.log(`${Number(i)+1}. ID:${carros[i].id}, MODELO:${carros[i].Modelo},MARCA:${carros[i].Marca}, ANO:${carros[i].Ano},ANO_DE_FABRICACAO:${carros[i].AnoFabricacao},COR:${carros[i].Cor},VALOR:${carros[i].Valor},PLACA:${carros[i].Placa},VENDIDO:${(carros[i].Vendido)==true? "SIM":"NAO"}`)
    console.log("╚═════════════════════════════════════════════════════════════════════════╝");
}
   return lista_de_veiculos
}

function ordenar_veiculos(lista_de_veiculos){
    let veiculos_ordenados=[...lista_de_veiculos]
    let opcao=Number(question("Deseja ordenar por (1-Nome do modelo,2-ano,3-valor): "))
    let modo=Number(question("Modo (1-Crescente,2-Decrecente): "))
    if(opcao==1){
         if(modo==1){
              veiculos_ordenados=ordenarModelosCrescente(veiculos_ordenados)
         }
         else if(modo==2){
            ordenarModelosDecrescente(veiculos_ordenados)
        }
        else{
            console.log("modo de ordenacao invalido!")
        }
    }
    else if(opcao==2){
        if(modo==1){
              ordenarAnosCrescente(veiculos_ordenados)
        }
        else if(modo==2){
           ordenarAnosDecrescente(veiculos_ordenados)
       }
       else{
           console.log("modo de ordenacao invalido!")
       }
   }
   else if(opcao==3){
        if(modo==1){
            ordenarValorCrescente(veiculos_ordenados)
        }
        else if(modo==2){
          ordenarValorDecrescente(veiculos_ordenados)
      }
      else{
          console.log("modo de ordenacao invalido!")
      }

   
}
else{
  console.log("Opcao invalida!")
}
console.log("_____________Resultado__________________")
   for (let i in veiculos_ordenados){  
        console.log("╔═════════════════════════════════════════════════════════════════════════╗");
        console.log(`${Number(i)+1}. ID:${veiculos_ordenados[i].id}, MODELO:${veiculos_ordenados[i].Modelo},MARCA:${veiculos_ordenados[i].Marca}, ANO:${veiculos_ordenados[i].Ano},ANO_DE_FABRICACAO:${veiculos_ordenados[i].AnoFabricacao},COR:${veiculos_ordenados[i].Cor},VALOR:${veiculos_ordenados[i].Valor},PLACA:${veiculos_ordenados[i].Placa},VENDIDO:${(veiculos_ordenados[i].Vendido)==true? "SIM":"NAO"}`)
        console.log("╚═════════════════════════════════════════════════════════════════════════╝");
    }
}

export function verificar_se_contem_substring(texto = '', substring_do_texto, ignore_case = false) {
  let resultado_substring_esta_no_texto = false
  let numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
  if (ignore_case == true) {
      for (const indice_caractere_atual in texto) {
          if (texto[indice_caractere_atual].toUpperCase()== substring_do_texto[0].toUpperCase()) {
              for (let indice_atual = 0; indice_atual < substring_do_texto.length; indice_atual++) {

                  if ( texto[Number(indice_caractere_atual) + Number(indice_atual)].toUpperCase()===substring_do_texto[indice_atual].toUpperCase() ) {
                      numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++

                  }

              }
              if (numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto == substring_do_texto.length) {
                  resultado_substring_esta_no_texto = true
              } else {
                  numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
              }
          }
      }
  } else if (ignore_case == false) {
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
  }

  return resultado_substring_esta_no_texto

}











//>>>>>>>>>>>>>>>>>>>>>>>>>Funcoes de ORDENACAO DOS DADOS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function ordenarModelosCrescente(array) {
  let lista_ordenada=[...array]
    for (let i = 0; i < lista_ordenada.length - 1; i++) {
      for (let j = 0; j < lista_ordenada.length - i - 1; j++) {
        if (lista_ordenada[j].Modelo > lista_ordenada[j + 1].Modelo) {
          // Trocar os elementos se estiverem fora de ordem
          let temp = lista_ordenada[j];
          lista_ordenada[j] = lista_ordenada[j + 1];
          lista_ordenada[j + 1] = temp;
        }
      }
    }
    return lista_ordenada
  }
  
  // Função para ordenar números em ordem decrescente
  function ordenarModelosDecrescente(array) {
    let lista_ordenada=[...array]
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
  let lista_ordenada=[...array]
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
    let lista_ordenada=[...array]
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
    let lista_ordenada=[...array]
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
    let lista_ordenada=[...array]
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