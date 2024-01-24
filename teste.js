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

