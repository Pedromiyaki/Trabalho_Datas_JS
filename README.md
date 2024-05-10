# Trabalho_Datas_JS
primeira função: 
A função recebe dois parâmetros do tipo Date, data1 e data2.
Usei o operador > para comparar as datas, se data1 for maior que data 2, a funcção retorna data 1, se não, retorna data 2 
É importante notar que a comparação de datas em Javascript é feita através da comparação do timestamp,
 que representa o número de milisegundos desde a meia-noite de 1º de janeiro de 1970.

segunda função 
A função recebe dois parâmetros do tipo Date, dataInicio e dataFim.
Uma validação é realizada para garantir que dataInicio seja anterior a dataFim. Se a co  atendida, um erro é lançado.
A diferença entre as datas em milissegundos é calculada usando dataFim.getTime() - dataInicio.getTime().
Convertemos a diferença para outras unidades de tempo (segundos, minutos, horas e dias) usando divisão e operações de módulo.
A função retorna um objeto com as propriedades dias, horas, minutos e segundos, contendo a diferença entre as datas em cada unidade.

Terceira função: 
A função obtém a data atual usando new Date().
Formatei as horas, minutos, dia, mês e ano para ter o formato desejado (com dois dígitos, preenchendo com zeros à esquerda se necessário).
Usei o método toString() para converter os valores numéricos em strings.
O método padStart() é usado para adicionar zeros à esquerda das strings das horas, minutos, dia e mês, caso necessário.
O mês é ajustado de 0 a 11 para 1 a 12, pois o objeto Date considera janeiro como mês 0.
Finalmente, juntei as strings formatadas para obter o formato desejado: hora:minuto - dia/mês/ano.
