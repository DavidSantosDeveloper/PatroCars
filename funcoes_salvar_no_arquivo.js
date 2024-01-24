
import fs from "fs"

export function salvar_montadoras_no_arquivo_txt(montadoras){
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


export function ler_arquivo_montadoras_txt(montadoras){
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




export function salvar_carros_no_arquivo_txt(carros){
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

export function ler_arquivo_carros_txt(carros){
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