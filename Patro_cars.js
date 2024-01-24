import { question } from "readline-sync";
import {ulid} from "ulidx";
import fs from "fs"

import {ler_arquivo_montadoras_txt,ler_arquivo_carros_txt} from "./funcoes_salvar_no_arquivo.js"
import {cadastrar_montadoras,atualizar_montadoras,filtrar_montadoras,listar_montadora,remover_montadoras  } from "./funcoes_montadora.js";
import { cadastrar_carro,listar_cars,atualizar_carro,filtrar_carros,remover_carro } from "./funcoes_carro.js";
import { vender_carro } from "./funcoes_venda.js";
import {exibir_veiculos} from "./funcoes_exibir.js"

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
            cadastrar_carro(carros,montadoras)
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
       else if (opcao === 12){
        exibir_veiculos(carros)
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
            12.Exibir Veiculos com filtro e ordenacao
             opcao (0 - Sair)>> `

             return opcoes

}


main()