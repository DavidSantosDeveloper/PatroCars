import { question } from "readline-sync";
import { salvar_carros_no_arquivo_txt } from "./funcoes_salvar_no_arquivo.js";

export function procurar_veiculos(carros){
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



export function vender_carro(lista_de_veiculos){
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
